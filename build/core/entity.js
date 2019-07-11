import { ComponentCollection } from "./component";
import { Dispatcher } from "./dispatcher";
/**
 * An Entity holds an id and a list of components attached to it.
 * You can add or remove components from the entity.
 *
 * @export
 * @abstract
 * @class Entity
 */
export class Entity extends Dispatcher {
    /**
     * Creates an instance of Entity.
     *
     * @param {string} id The id, you should provide by yourself. Maybe an uuid or a simple number.
     */
    constructor(id) {
        super();
        this.id = id;
        this._components = new ComponentCollection();
        this._components.addListener(this, true);
    }
    /**
     * A snapshot of all components of this entity.
     *
     * @readonly
     * @type {ComponentCollection}
     */
    get components() {
        return this._components;
    }
    /**
     * Dispatches the `onAdded` event to all listeners as `onAddedComponents`.
     *
     * @param {Component[]} components
     * @returns {void}
     */
    onAdded(...components) {
        const args = ['onAddedComponents'].concat(components);
        return this.dispatch.apply(this, args);
    }
    /**
     * Dispatches the `onRemoved` event to all listeners as `onRemovedComponents`.
     *
     * @param {Component[]} components
     * @returns {void}
     */
    onRemoved(...components) {
        const args = ['onRemovedComponents'].concat(components);
        return this.dispatch.apply(this, args);
    }
    /**
     * Dispatches the `onCleared` event to all listeners as `onClearedComponents`.
     *
     * @returns {void}
     */
    onCleared() {
        return this.dispatch('onClearedComponents');
    }
    /**
     * Dispatches the `onSorted` event to all listeners as `onSortedComponents`.
     *
     * @returns {void}
     */
    onSorted() {
        return this.dispatch('onSortedComponents');
    }
}
