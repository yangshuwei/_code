class LimitLoad {
  constructor(urls, limit) {
    this.urls = urls;
    this.limit = limit,
      this.sequence = [].concat(urls)
    this.promises = [];
    this.loop();
  }
  loadImg(url) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.onload = function () {
        console.log('一张图片加载完成');
        resolve()
      }
      img.onerror = reject;
      img.src = url
    })
  }
  loop() {
    this.promises = this.sequence.splice(0, this.limit).map((url, index) => {
      return this.loadImg(url).then(() => {
        return index;
      })
    })
      (function () {
        let p = Promise.race(this.promises);
        for (let i = 0; i < this.sequence.length; i++) {
          p = p.then((res) => {
            this.promises[res] = this.loadImg(this.sequence[i]).then(res => res)
            return Promise.race(this.promises)
          })
        }
      })()


  }
}
