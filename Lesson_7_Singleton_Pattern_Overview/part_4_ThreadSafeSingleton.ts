class ThreadSafeSingleton {
    private static instance: ThreadSafeSingleton;
    private static lock = new Object();

    private constructor() {}

    public static getInstance(): ThreadSafeSingleton {
        if (!ThreadSafeSingleton.instance) {
            synchronized(ThreadSafeSingleton.lock) {
                if (!ThreadSafeSingleton.instance) {
                    ThreadSafeSingleton.instance = new ThreadSafeSingleton();
                }
            }
        }
        return ThreadSafeSingleton.instance;
    }
}
