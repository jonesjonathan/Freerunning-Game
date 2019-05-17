/**
 * Represents a single scene
 */

import WebScene from './webscene';
import {  } from 'three';

export default class Sample extends WebScene {
    static path() {
        return '/sample';
    }

    constructor(renderer) {
        super(renderer);
    }

    clean() {
        // TODO: End procedure for this scene
    }

    _animate(delta) {
    }
};