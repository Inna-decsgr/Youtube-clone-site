export default class Youtube {
  constructor(apiClient){
    this.apiClient = apiClient
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async changeImageURL(id) {
    return this.apiClient
    .channels({params: {
      part:'snippet',
      id
    }})
    .then(res => res.data.items[0].snippet.thumbnails.default.url)
  }

  async relatedVideos(id) {
    return this.apiClient
    .search({params: {
      part:'snippet',
      maxResults:35,
      type:'video',
      channelId:id
    }})
    .then(res => res.data.items.map(item => ({...item, id:item.id.videoId})))
  }

  async relatedComments(id) {
    return this.apiClient
    .comments({params: {
      part:'snippet',
      videoId:id,
      maxResults:50,
    }})
    .then(res => res.data.items.map(item => ({...item.snippet.topLevelComment.snippet})))
  }

  async #searchByKeyword(keyword) {
    return await this.apiClient
    .search({params: {
      part:'snippet',
      maxResults:25,
      q:keyword,
    }})
    .then(res => res.data.items.map(item => ({...item, id:item.id.videoId})))
  }

  async #mostPopular() {
    return this.apiClient
    .videos({params: {
      part:'snippet',
      maxResults:25,
      type:'video',
      chart:'mostPopular',
      regionCode:'KR'
    }})
    .then(res => res.data.items)
  }
}