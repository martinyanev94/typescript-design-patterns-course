class AudioSystem {
    turnOn(): void {
        console.log("Audio system turned on.");
    }

    turnOff(): void {
        console.log("Audio system turned off.");
    }
}

class VideoSystem {
    turnOn(): void {
        console.log("Video system turned on.");
    }

    turnOff(): void {
        console.log("Video system turned off.");
    }
}

class HomeTheaterFacade {
    private audio: AudioSystem;
    private video: VideoSystem;

    constructor(audio: AudioSystem, video: VideoSystem) {
        this.audio = audio;
        this.video = video;
    }

    watchMovie(): void {
        this.audio.turnOn();
        this.video.turnOn();
        console.log("Starting movie...");
    }

    endMovie(): void {
        this.audio.turnOff();
        this.video.turnOff();
        console.log("Ending movie...");
    }
}

const audioSystem = new AudioSystem();
const videoSystem = new VideoSystem();
const homeTheater = new HomeTheaterFacade(audioSystem, videoSystem);

homeTheater.watchMovie();
homeTheater.endMovie();
