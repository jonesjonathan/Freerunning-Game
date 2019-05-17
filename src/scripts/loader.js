import {ObjectLoader, TextureLoader, LoadingManager} from 'three';
import GLTFLoader from 'three-gltf-loader';

let isLoading = false;
const manager = new LoadingManager();
manager.onStart = () => { isLoading = true; }

const objectLoader = new ObjectLoader(manager);
const textureLoader = new TextureLoader(manager);
const gltfLoader = new GLTFLoader(manager);

export default class Loader {
    constructor() {
        this.cache = {};
        this._load = this._load.bind(this);
    }

    _load(loader, url, id) {
        loader.load(
            url,
            (asset) => { // onSuccess
                this.cache[id] = asset;
            }
        );
    }

    addObjectToQueue(url, id) {
        this._load(objectLoader, url, id);
    }

    addTextureToQueue(url, id) {
        this._load(textureLoader, url, id);
    }

    addGLTFToQueue(url, id) {
        this._load(gltfLoader, url, id);
    }

    waitForCache() {
        const promise = new Promise(((resolve, reject) => {
            if(isLoading) {
                manager.onLoad = (() => {
                    isLoading = false;
                    console.log( 'Loading complete!');
                    resolve(this.cache);
                }).bind(this);
            } else {
                resolve(this.cache);
            }
        }).bind(this));
        return promise;
    }
    
};