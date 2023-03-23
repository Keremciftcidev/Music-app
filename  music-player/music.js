class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Cumartesi", "Tan Taşçı","1.jpeg","1.mp3"),    
    new Music("Söyleme", "Tan Taşçı","2.jpeg","2.mp3"),    
    new Music("Bilir Mi?", "Tan Taşçı","3.jpeg","3.mp3")    
];
