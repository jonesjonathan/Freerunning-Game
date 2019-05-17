/**
 * Represents a single scene
 */

import WebScene from './webscene';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export default class LoadingScene extends WebScene {

    constructor(renderer) {
        super(renderer);

        const gBox = new BoxGeometry(1, 1, 1);
        const mBox = new MeshBasicMaterial({color : 'green', wireframe : true});
        const box = new Mesh(gBox, mBox);

        box.position.set(0, 0, -5);
        this.box = box;
        this.scene.add(box);
    }

    _animate(delta) {
        this.box.rotateY(delta);
    }
};