import { mapGetters, mapMutations, mapActions } from "vuex";
import { playMode } from "./config.js";
import { shuffle } from "./util.js";

export const playlistMixin = {
  computed: {
    ...mapGetters(["playlist"])
  },
  mounted() {
    this.handlePlaylist(this.playlist);
  },
  activated() {
    this.handlePlaylist(this.playlist);
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(newVal);
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error("component must implement handllPlaylist method");
    }
  }
};

export const playerMixin = {
  computed: {
    iconMode() {
      return this.mode === playMode.sequence
        ? "icon-sequence"
        : this.mode === playMode.loop
        ? "icon-loop"
        : "icon-random";
    },
    ...mapGetters([
      "fullScreen",
      "playlist",
      "currentSong",
      "playing",
      "currentIndex",
      "mode",
      "sequenceList",
      "favoriteList"
    ])
  },
  methods: {
    changeMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = null;
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList);
      } else {
        list = this.sequenceList;
      }

      this.resetCurrentIndex(list);
      this.setPlaylist(list);
    },
    resetCurrentIndex(list) {
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    getFavoriteIcon(song) {
      if (this.isFavorite(song)) {
        return "icon-favorite";
      } else {
        return "icon-not-favorite";
      }
    },
    toggleFavorite(song) {
      if (this.isFavorite(song)) {
        this.deleteFavoriteList(song);
      } else {
        this.saveFavoriteList(song);
      }
    },
    isFavorite(song) {
      const index = this.favoriteList.findIndex(item => {
        return item.id === song.id;
      });
      return index > -1;
    },
    ...mapMutations({
      setPlayingState: "SET_PLAYING_STATE",
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_PLAY_MODE",
      setPlaylist: "SET_PLAYLIST"
    }),
    ...mapActions(["saveFavoriteList", "deleteFavoriteList"])
  }
};

export const searchMixins = {
  data() {
    return {
      query: "",
      refreshDelay: 100
    };
  },
  computed: {
    ...mapGetters(["searchHistory"])
  },
  methods: {
    addQuery(query) {
      this.$refs.searchBox.setQuery(query);
    },
    blurInput() {
      this.$refs.searchBox.blur();
    },
    saveSearch() {
      this.saveSearchHistory(this.query);
    },
    onQueryChange(query) {
      this.query = query;
    },
    ...mapActions(["saveSearchHistory", "deleteSearchHistory"])
  }
};
