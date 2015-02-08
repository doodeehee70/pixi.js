!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.PIXI=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
    core:           require('./core'),
    extras:         require('./extras'),
    filters:        require('./filters'),
    interaction:    require('./interaction'),
    loaders:        require('./loaders'),
    spine:          require('./spine'),
    text:           require('./text')
};

},{"./core":9,"./extras":55,"./filters":81,"./interaction":84,"./loaders":92,"./spine":95,"./text":98}],2:[function(require,module,exports){
module.exports = function webglEnabled() {
  try {
    var canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

},{}],3:[function(require,module,exports){
module.exports={
  "name": "pixi.js",
  "version": "3.0.0",
  "description": "Pixi.js is a fast lightweight 2D library that works across all devices.",
  "author": "Mat Groves",
  "contributors": [
    "Chad Engler <chad@pantherdev.com>",
    "Richard Davey <rdavey@gmail.com>"
  ],
  "main": "./src/index.js",
  "homepage": "http://goodboydigital.com/",
  "bugs": "https://github.com/GoodBoyDigital/pixi.js/issues",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/GoodBoyDigital/pixi.js.git"
  },
  "scripts": {
    "test": "gulp test",
    "docs": "./node_modules/.bin/jsdoc -c ./gulp/util/jsdoc.conf.json"
  },
  "devDependencies": {
    "browserify": "^8.0.2",
    "chai": "^1.10.0",
    "del": "^1.1.0",
    "gulp": "^3.8.10",
    "gulp-jshint": "^1.9.0",
    "gulp-plumber": "^0.6.6",
    "gulp-rename": "^1.2.0",
    "gulp-uglify": "^1.0.2",
    "gulp-util": "^3.0.1",
    "ink-docstrap": "^0.4.12",
    "jsdoc": "^3.3.0-alpha13",
    "jshint-summary": "^0.4.0",
    "karma": "^0.12.28",
    "karma-firefox-launcher": "^0.1.0",
    "karma-mocha": "^0.1.10",
    "karma-spec-reporter": "^0.0.16",
    "mocha": "^2.1.0",
    "require-dir": "^0.1.0",
    "run-sequence": "^1.0.2",
    "vinyl-buffer": "^1.0.0",
    "vinyl-source-stream": "^1.0.0",
    "watchify": "^2.2.1"
  },
  "dependencies": {
    "webgl-enabled": "^1.0.2"
  }
}

},{}],4:[function(require,module,exports){
/**
 * Constant values used in pixi
 *
 * @mixin const
 */
module.exports = {
    /**
     * Constant to identify the WEBGL Renderer Type
     *
     * @static
     * @constant
     * @property {number} WEBGL_RENDERER
     */
    WEBGL_RENDERER: 1,

    /**
     * Constant to identify the CANVAS Renderer Type
     *
     * @static
     * @constant
     * @property {number} CANVAS_RENDERER
     */
    CANVAS_RENDERER: 2,

    /**
     * String of the current PIXI version
     *
     * @static
     * @constant
     * @property {string} VERSION
     */
    VERSION: require('../../package.json').version,

    /**
     * Various blend modes supported by PIXI. IMPORTANT - The WebGL renderer only supports
     * the NORMAL, ADD, MULTIPLY and SCREEN blend modes. Anything else will silently act like
     * NORMAL.
     *
     * @static
     * @constant
     * @property {object} blendModes
     * @property {number} blendModes.NORMAL
     * @property {number} blendModes.ADD
     * @property {number} blendModes.MULTIPLY
     * @property {number} blendModes.SCREEN
     * @property {number} blendModes.OVERLAY
     * @property {number} blendModes.DARKEN
     * @property {number} blendModes.LIGHTEN
     * @property {number} blendModes.COLOR_DODGE
     * @property {number} blendModes.COLOR_BURN
     * @property {number} blendModes.HARD_LIGHT
     * @property {number} blendModes.SOFT_LIGHT
     * @property {number} blendModes.DIFFERENCE
     * @property {number} blendModes.EXCLUSION
     * @property {number} blendModes.HUE
     * @property {number} blendModes.SATURATION
     * @property {number} blendModes.COLOR
     * @property {number} blendModes.LUMINOSITY
     */
    blendModes: {
        NORMAL:         0,
        ADD:            1,
        MULTIPLY:       2,
        SCREEN:         3,
        OVERLAY:        4,
        DARKEN:         5,
        LIGHTEN:        6,
        COLOR_DODGE:    7,
        COLOR_BURN:     8,
        HARD_LIGHT:     9,
        SOFT_LIGHT:     10,
        DIFFERENCE:     11,
        EXCLUSION:      12,
        HUE:            13,
        SATURATION:     14,
        COLOR:          15,
        LUMINOSITY:     16
    },

    /**
     * The scale modes that are supported by pixi.
     *
     * The DEFAULT scale mode affects the default scaling mode of future operations.
     * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
     *
     * @static
     * @constant
     * @property {object} scaleModes
     * @property {number} scaleModes.DEFAULT=LINEAR
     * @property {number} scaleModes.LINEAR Smooth scaling
     * @property {number} scaleModes.NEAREST Pixelating scaling
     */
    scaleModes: {
        DEFAULT:    0,
        LINEAR:     0,
        NEAREST:    1
    },

    /**
     * The prefix that denotes a URL is for a retina asset
     *
     * @static
     * @constant
     * @property {string} RETINA_PREFIX
     */
    RETINA_PREFIX: '@2x',

    /**
     * The default render options if none are supplied to {@link PIXI.WebGLRenderer}
     * or {@link PIXI.CanvasRenderer}.
     *
     * @static
     * @constant
     * @property {object} defaultRenderOptions
     * @property {HTMLCanvasElement} defaultRenderOptions.view=null
     * @property {boolean} defaultRenderOptions.transparent=false
     * @property {boolean} defaultRenderOptions.antialias=false
     * @property {boolean} defaultRenderOptions.preserveDrawingBuffer=false
     * @property {number} defaultRenderOptions.resolution=1
     * @property {number} defaultRenderOptions.backgroundColor=0x000000
     * @property {boolean} defaultRenderOptions.clearBeforeRender=true
     * @property {boolean} defaultRenderOptions.autoResize=false
     */
    defaultRenderOptions: {
        view: null,
        resolution: 1,
        antialias: false,
        autoResize: false,
        transparent: false,
        backgroundColor: 0x000000,
        clearBeforeRender: true,
        preserveDrawingBuffer: false
    },

    /**
     * Constants that identify shapes, mainly to prevent `instanceof` calls.
     *
     * @static
     * @constant
     * @property {object} SHAPES
     * @property {object} SHAPES.POLY=0
     * @property {object} SHAPES.RECT=1
     * @property {object} SHAPES.CIRC=2
     * @property {object} SHAPES.ELIP=3
     * @property {object} SHAPES.RREC=4
     */
    SHAPES: {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4
    }
};

},{"../../package.json":3}],5:[function(require,module,exports){
var math = require('../math');

/**
 * The base class for all objects that are rendered on the screen.
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class
 * @namespace PIXI
 */
function DisplayObject() {
    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @member {Point}
     */
    this.position = new math.Point();

    /**
     * The scale factor of the object.
     *
     * @member {Point}
     */
    this.scale = new math.Point(1, 1);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {Point}
     */
    this.pivot = new math.Point(0, 0);

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */
    this.rotation = 0;

    /**
     * The opacity of the object.
     *
     * @member {number}
     */
    this.alpha = 1;

    /**
     * The visibility of the object. If false the object will not be drawn, and
     * the updateTransform function will not be called.
     *
     * @member {boolean}
     */
    this.visible = true;

    /**
     * Can this object be rendered, if false the object will not be drawn but the updateTransform
     * methods will still be called.
     *
     * @member {boolean}
     */
    this.renderable = false;

    /**
     * The display object container that contains this display object.
     *
     * @member {DisplayObjectContainer}
     * @readOnly
     */
    this.parent = null;

    /**
     * The multiplied alpha of the displayObject
     *
     * @member {number}
     * @readOnly
     */
    this.worldAlpha = 1;

    /**
     * Current transform of the object based on world (parent) factors
     *
     * @member {Matrix}
     * @readOnly
     */
    this.worldTransform = new math.Matrix();

    /**
     * The area the filter is applied to. This is used as more of an optimisation
     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
     *
     * @member {Rectangle}
     */
    this.filterArea = null;

    /**
     * cached sin rotation
     *
     * @member {number}
     * @private
     */
    this._sr = 0;

    /**
     * cached cos rotation
     *
     * @member {number}
     * @private
     */
    this._cr = 1;

    /**
     * The original, cached bounds of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._bounds = new math.Rectangle(0, 0, 1, 1);

    /**
     * The most up-to-date bounds of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._currentBounds = null;

    /**
     * The original, cached mask of the object
     *
     * @member {Rectangle}
     * @private
     */
    this._mask = null;

    /**
     * Cached internal flag.
     *
     * @member {boolean}
     * @private
     */
    this._cacheIsDirty = false;
}

// constructor
DisplayObject.prototype.constructor = DisplayObject;
module.exports = DisplayObject;

Object.defineProperties(DisplayObject.prototype, {
    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     *
     * @member {number}
     * @memberof DisplayObject#
     */
    x: {
        get: function () {
            return this.position.x;
        },
        set: function (value) {
            this.position.x = value;
        }
    },

    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     *
     * @member {number}
     * @memberof DisplayObject#
     */
    y: {
        get: function () {
            return this.position.y;
        },
        set: function (value) {
            this.position.y = value;
        }
    },

    /**
     * Indicates if the sprite is globally visible.
     *
     * @member {boolean}
     * @memberof DisplayObject#
     * @readonly
     */
    worldVisible: {
        get: function () {
            var item = this;

            do {
                if (!item.visible) {
                    return false;
                }

                item = item.parent;
            } while(item);

            return true;
        }
    },

    /**
     * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.
     * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.
     * To remove a mask, set this property to null.
     *
     * @member {Graphics}
     * @memberof DisplayObject#
     */
    mask: {
        get: function () {
            return this._mask;
        },
        set: function (value) {
            if (this._mask) {
                this._mask.isMask = false;
            }

            this._mask = value;

            if (this._mask) {
                this._mask.isMask = true;
            }
        }
    },

    /**
     * Sets the filters for the displayObject.
     * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
     * To remove filters simply set this property to 'null'
     *
     * @member {Filter[]}
     * @memberof DisplayObject#
     */
    filters: {
        get: function () {
            return this._filters;
        },
        set: function (value) {
            if (value) {
                // now put all the passes in one place..
                var passes = [];

                for (var i = 0; i < value.length; i++) {
                    var filterPasses = value[i].passes;

                    for (var j = 0; j < filterPasses.length; j++) {
                        passes.push(filterPasses[j]);
                    }
                }

                // TODO change this as it is legacy
                this._filterBlock = { target: this, filterPasses: passes };
            }

            this._filters = value;
        }
    }
});

/*
 * Updates the object transform for rendering
 *
 * TODO - Optimization pass!
 *
 * @private
 */
DisplayObject.prototype.updateTransform = function () {
    if (!this.parent) {
        return;
    }

    // create some matrix refs for easy access
    var pt = this.parent.worldTransform;
    var wt = this.worldTransform;

    // temporary matrix variables
    var a, b, c, d, tx, ty;

    // so if rotation is between 0 then we can simplify the multiplication process..
    if (this.rotation % math.PI_2) {
        // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes
        if (this.rotation !== this.rotationCache) {
            this.rotationCache = this.rotation;
            this._sr = Math.sin(this.rotation);
            this._cr = Math.cos(this.rotation);
        }

        // get the matrix values of the displayobject based on its transform properties..
        a  =  this._cr * this.scale.x;
        b  =  this._sr * this.scale.x;
        c  = -this._sr * this.scale.y;
        d  =  this._cr * this.scale.y;
        tx =  this.position.x;
        ty =  this.position.y;

        // check for pivot.. not often used so geared towards that fact!
        if (this.pivot.x || this.pivot.y) {
            tx -= this.pivot.x * a + this.pivot.y * c;
            ty -= this.pivot.x * b + this.pivot.y * d;
        }

        // concat the parent matrix with the objects transform.
        wt.a  = a  * pt.a + b  * pt.c;
        wt.b  = a  * pt.b + b  * pt.d;
        wt.c  = c  * pt.a + d  * pt.c;
        wt.d  = c  * pt.b + d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }
    else {
        // lets do the fast version as we know there is no rotation..
        a  = this.scale.x;
        d  = this.scale.y;

        tx = this.position.x - this.pivot.x * a;
        ty = this.position.y - this.pivot.y * d;

        wt.a  = a  * pt.a;
        wt.b  = a  * pt.b;
        wt.c  = d  * pt.c;
        wt.d  = d  * pt.d;
        wt.tx = tx * pt.a + ty * pt.c + pt.tx;
        wt.ty = tx * pt.b + ty * pt.d + pt.ty;
    }

    // multiply the alphas..
    this.worldAlpha = this.alpha * this.parent.worldAlpha;
};

// performance increase to avoid using call.. (10x faster)
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

/**
 * Retrieves the bounds of the displayObject as a rectangle object
 *
 * @param matrix {Matrix}
 * @return {Rectangle} the rectangular bounding area
 */
DisplayObject.prototype.getBounds = function (/* matrix */) {
    return math.Rectangle.EMPTY;
};

/**
 * Retrieves the local bounds of the displayObject as a rectangle object
 *
 * @return {Rectangle} the rectangular bounding area
 */
DisplayObject.prototype.getLocalBounds = function () {
    return this.getBounds(math.Matrix.IDENTITY);
};

/**
 * Calculates the global position of the display object
 *
 * @param position {Point} The world origin to calculate from
 * @return {Point} A point object representing the position of this object
 */
DisplayObject.prototype.toGlobal = function (position) {
    // don't need to u[date the lot
    this.displayObjectUpdateTransform();
    return this.worldTransform.apply(position);
};

/**
 * Calculates the local position of the display object relative to another point
 *
 * @param position {Point} The world origin to calculate from
 * @param [from] {DisplayObject} The DisplayObject to calculate the global position from
 * @return {Point} A point object representing the position of this object
 */
DisplayObject.prototype.toLocal = function (position, from) {
    if (from) {
        position = from.toGlobal(position);
    }

    // don't need to update the lot
    this.displayObjectUpdateTransform();
    return this.worldTransform.applyInverse(position);
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The renderer
 * @private
 */
DisplayObject.prototype.renderWebGL = function (/* renderer */) {
    // OVERWRITE;
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 * @private
 */
DisplayObject.prototype.renderCanvas = function (/* renderer */) {
    // OVERWRITE;
};

},{"../math":12}],6:[function(require,module,exports){
var math = require('../math'),
    DisplayObject = require('./DisplayObject'),
    RenderTexture = require('../textures/RenderTexture'),
    // Sprite = require('./Sprite'),
    _tempMatrix = new math.Matrix();

/**
 * A DisplayObjectContainer represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 * @class
 * @extends DisplayObject
 * @namespace PIXI
 */
function DisplayObjectContainer() {
    DisplayObject.call(this);

    /**
     * The array of children of this container.
     *
     * @member {DisplayObject[]}
     * @readonly
     */
    this.children = [];

    /**
     * Cached internal flag.
     *
     * @member {boolean}
     * @private
     */
    this._cacheAsBitmap = false;

    this._cachedSprite = null;
}

// constructor
DisplayObjectContainer.prototype = Object.create(DisplayObject.prototype);
DisplayObjectContainer.prototype.constructor = DisplayObjectContainer;
module.exports = DisplayObjectContainer;

Object.defineProperties(DisplayObjectContainer.prototype, {
    /**
     * The width of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof DisplayObjectContainer#
     */
    width: {
        get: function () {
            return this.scale.x * this.getLocalBounds().width;
        },
        set: function (value) {

            var width = this.getLocalBounds().width;

            if(width !== 0) {
                this.scale.x = value / width;
            }
            else {
                this.scale.x = 1;
            }


            this._width = value;
        }
    },

    /**
     * The height of the displayObjectContainer, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof DisplayObjectContainer#
     */
    height: {
        get: function () {
            return  this.scale.y * this.getLocalBounds().height;
        },
        set: function (value) {

            var height = this.getLocalBounds().height;

            if (height !== 0) {
                this.scale.y = value / height ;
            }
            else {
                this.scale.y = 1;
            }

            this._height = value;
        }
    },

    /**
     * Set if this display object is cached as a bitmap.
     * This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects.
     * To remove simply set this property to 'null'
     *
     * @member {boolean}
     * @memberof DisplayObject#
     */
    cacheAsBitmap: {
        get: function () {
            return this._cacheAsBitmap;
        },
        set: function (value) {
            if (this._cacheAsBitmap === value) {
                return;
            }

            if (value) {
                this._generateCachedSprite();
            }
            else {
                this._destroyCachedSprite();
            }

            this._cacheAsBitmap = value;
        }
    }
});

/**
 * Adds a child to the container.
 *
 * @param child {DisplayObject} The DisplayObject to add to the container
 * @return {DisplayObject} The child that was added.
 */
DisplayObjectContainer.prototype.addChild = function (child) {
    return this.addChildAt(child, this.children.length);
};

/**
 * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
 *
 * @param child {DisplayObject} The child to add
 * @param index {Number} The index to place the child in
 * @return {DisplayObject} The child that was added.
 */
DisplayObjectContainer.prototype.addChildAt = function (child, index) {
    // prevent adding self as child
    if (child === this) {
        return;
    }

    if (index >= 0 && index <= this.children.length) {
        if (child.parent) {
            child.parent.removeChild(child);
        }

        child.parent = this;

        this.children.splice(index, 0, child);

        return child;
    }
    else {
        throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
    }
};

/**
 * Swaps the position of 2 Display Objects within this container.
 *
 * @param child {DisplayObject}
 * @param child2 {DisplayObject}
 */
DisplayObjectContainer.prototype.swapChildren = function (child, child2) {
    if (child === child2) {
        return;
    }

    var index1 = this.getChildIndex(child);
    var index2 = this.getChildIndex(child2);

    if (index1 < 0 || index2 < 0) {
        throw new Error('swapChildren: Both the supplied DisplayObjects must be a child of the caller.');
    }

    this.children[index1] = child2;
    this.children[index2] = child;
};

/**
 * Returns the index position of a child DisplayObject instance
 *
 * @param child {DisplayObject} The DisplayObject instance to identify
 * @return {Number} The index position of the child display object to identify
 */
DisplayObjectContainer.prototype.getChildIndex = function (child) {
    var index = this.children.indexOf(child);

    if (index === -1) {
        throw new Error('The supplied DisplayObject must be a child of the caller');
    }

    return index;
};

/**
 * Changes the position of an existing child in the display object container
 *
 * @param child {DisplayObject} The child DisplayObject instance for which you want to change the index number
 * @param index {Number} The resulting index number for the child display object
 */
DisplayObjectContainer.prototype.setChildIndex = function (child, index) {
    if (index < 0 || index >= this.children.length) {
        throw new Error('The supplied index is out of bounds');
    }

    var currentIndex = this.getChildIndex(child);

    this.children.splice(currentIndex, 1); //remove from old position
    this.children.splice(index, 0, child); //add at new position
};

/**
 * Returns the child at the specified index
 *
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child at the given index, if any.
 */
DisplayObjectContainer.prototype.getChildAt = function (index) {
    if (index < 0 || index >= this.children.length) {
        throw new Error('getChildAt: Supplied index ' + index + ' does not exist in the child list, or the supplied DisplayObject must be a child of the caller');
    }

    return this.children[index];
};

/**
 * Removes a child from the container.
 *
 * @param child {DisplayObject} The DisplayObject to remove
 * @return {DisplayObject} The child that was removed.
 */
DisplayObjectContainer.prototype.removeChild = function (child) {
    var index = this.children.indexOf(child);

    if (index === -1) {
        return;
    }

    return this.removeChildAt(index);
};

/**
 * Removes a child from the specified index position.
 *
 * @param index {Number} The index to get the child from
 * @return {DisplayObject} The child that was removed.
 */
DisplayObjectContainer.prototype.removeChildAt = function (index) {
    var child = this.getChildAt(index);

    child.parent = null;
    this.children.splice(index, 1);

    return child;
};

/**
 * Removes all children from this container that are within the begin and end indexes.
 *
 * @param beginIndex {Number} The beginning position. Default value is 0.
 * @param endIndex {Number} The ending position. Default value is size of the container.
 */
DisplayObjectContainer.prototype.removeChildren = function (beginIndex, endIndex) {
    var begin = beginIndex || 0;
    var end = typeof endIndex === 'number' ? endIndex : this.children.length;
    var range = end - begin;

    if (range > 0 && range <= end) {
        var removed = this.children.splice(begin, range);

        for (var i = 0; i < removed.length; ++i) {
            removed[i].parent = null;
        }

        return removed;
    }
    else if (range === 0 && this.children.length === 0) {
        return [];
    }
    else {
        throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    }
};

/**
 * Generates and updates the cached sprite for this object.
 *
 */
DisplayObjectContainer.prototype.updateCachedSprite = function () {
    this._generateCachedSprite();
};

/**
 * Useful function that returns a texture of the displayObject object that can then be used to create sprites
 * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.
 *
 * @param resolution {Number} The resolution of the texture being generated
 * @param scaleMode {Number} See {{#crossLink "PIXI/scaleModes:property"}}PIXI.scaleModes{{/crossLink}} for possible values
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.
 * @return {Texture} a texture of the graphics object
 */
DisplayObjectContainer.prototype.generateTexture = function (resolution, scaleMode, renderer) {
    var bounds = this.getLocalBounds();

    var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0, renderer, scaleMode, resolution);

    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;

    renderTexture.render(this, _tempMatrix);

    return renderTexture;
};

/*
 * Updates the transform on all children of this container for rendering
 *
 * @private
 */
DisplayObjectContainer.prototype.updateTransform = function () {
    if (!this.visible) {
        return;
    }

    this.displayObjectUpdateTransform();

    if (this._cacheAsBitmap) {
        return;
    }

    for (var i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].updateTransform();
    }
};

// performance increase to avoid using call.. (10x faster)
DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = DisplayObjectContainer.prototype.updateTransform;

/**
 * Retrieves the bounds of the displayObjectContainer as a rectangle. The bounds calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
DisplayObjectContainer.prototype.getBounds = function () {
    if (this.children.length === 0) {
        return math.Rectangle.EMPTY;
    }

    // TODO the bounds have already been calculated this render session so return what we have

    var minX = Infinity;
    var minY = Infinity;

    var maxX = -Infinity;
    var maxY = -Infinity;

    var childBounds;
    var childMaxX;
    var childMaxY;

    var childVisible = false;

    for (var i = 0, j = this.children.length; i < j; ++i) {
        var child = this.children[i];

        if (!child.visible) {
            continue;
        }

        childVisible = true;

        childBounds = this.children[i].getBounds();

        minX = minX < childBounds.x ? minX : childBounds.x;
        minY = minY < childBounds.y ? minY : childBounds.y;

        childMaxX = childBounds.width + childBounds.x;
        childMaxY = childBounds.height + childBounds.y;

        maxX = maxX > childMaxX ? maxX : childMaxX;
        maxY = maxY > childMaxY ? maxY : childMaxY;
    }

    if (!childVisible) {
        return math.Rectangle.EMPTY;
    }

    this._bounds.x = minX;
    this._bounds.y = minY;
    this._bounds.width = maxX - minX;
    this._bounds.height = maxY - minY;

    // TODO: store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    //this._currentBounds = bounds;

    return this._bounds;
};

/**
 * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle.
 * The calculation takes all visible children into consideration.
 *
 * @return {Rectangle} The rectangular bounding area
 */
DisplayObjectContainer.prototype.getLocalBounds = function () {
    var matrixCache = this.worldTransform;

    this.worldTransform = math.Matrix.IDENTITY;

    for (var i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].updateTransform();
    }

    this.worldTransform = matrixCache;

    return this.getBounds();
};

/**
 * Renders the object using the WebGL renderer
 *
 * TODO - Optimization pass!
 *
 * @param renderer {WebGLRenderer} The renderer
 */
DisplayObjectContainer.prototype.renderWebGL = function (renderer) {
    // if the object is not visible or the alpha is 0 then no need to render this element
    if (!this.visible || this.alpha <= 0) {
        return;
    }

    if (this._cacheAsBitmap) {
        this._renderCachedSprite(renderer);
        return;
    }

    var i, j;

    // do a quick check to see if this element has a mask or a filter.
    if (this._mask || this._filters) {
        // push filter first as we need to ensure the stencil buffer is correct for any masking
        if (this._filters) {
            renderer.spriteBatch.flush();
            renderer.filterManager.pushFilter(this._filterBlock);
        }

        if (this._mask) {
            renderer.spriteBatch.stop();
            renderer.maskManager.pushMask(this.mask, renderer);
            renderer.spriteBatch.start();
        }

        // add this object to the batch, only rendered if it has a texture.
        if (this.texture) {
            renderer.spriteBatch.render(this);
        }

        // now loop through the children and make sure they get rendered
        for (i = 0, j = this.children.length; i < j; i++) {
            this.children[i].renderWebGL(renderer);
        }

        // time to stop the sprite batch as either a mask element or a filter draw will happen next
        renderer.spriteBatch.stop();

        if (this._mask) {
            renderer.maskManager.popMask(this._mask, renderer);
        }

        if (this._filters) {
            renderer.filterManager.popFilter();
        }

        renderer.spriteBatch.start();
    }
    else {
        if (this.texture) {
            renderer.spriteBatch.render(this);
        }

        // simple render children!
        for (i = 0, j = this.children.length; i < j; ++i) {
            this.children[i].renderWebGL(renderer);
        }

    }
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The renderer
 */
DisplayObjectContainer.prototype.renderCanvas = function (renderer) {
    if (!this.visible || this.alpha <= 0) {
        return;
    }

    if (this._cacheAsBitmap) {
        this._renderCachedSprite(renderer);
        return;
    }

    if (this._mask) {
        renderer.maskManager.pushMask(this._mask, renderer);
    }

    for (var i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].renderCanvas(renderer);
    }

    if (this._mask) {
        renderer.maskManager.popMask(renderer);
    }
};

/**
 * Internal method.
 *
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer
 * @private
 */
DisplayObjectContainer.prototype._renderCachedSprite = function (renderer) {
    this._cachedSprite.worldAlpha = this.worldAlpha;

    if (renderer.gl) {
        this._cachedSprite.renderWebGL(renderer);
    }
    else {
        this._cachedSprite.renderCanvas(renderer);
    }
};

/**
 * Internal method.
 *
 * @private
 */
DisplayObjectContainer.prototype._generateCachedSprite = function () {
    var bounds = this.getLocalBounds();

    if (!this._cachedSprite) {
        // TODO - RenderTexture now *requires* a renderer instance, so this is like broken
        // because `renderer` isn't actually in scope here :P
        var renderTexture = new RenderTexture(renderer, bounds.width | 0, bounds.height | 0);

        this._cachedSprite = new Sprite(renderTexture);
        this._cachedSprite.worldTransform = this.worldTransform;
    }
    else {
        this._cachedSprite.texture.resize(bounds.width | 0, bounds.height | 0);
    }

    var tempFilters = this._filters;
    this._filters = null;

    this._cachedSprite.filters = tempFilters;

    _tempMatrix.tx = -bounds.x;
    _tempMatrix.ty = -bounds.y;

    this._cachedSprite.texture.render(this, _tempMatrix, true);

    this._cachedSprite.anchor.x = -(bounds.x / bounds.width);
    this._cachedSprite.anchor.y = -(bounds.y / bounds.height);

    this._filters = tempFilters;
};

/**
 * Destroys the cached sprite.
 *
 * @private
 */
DisplayObjectContainer.prototype._destroyCachedSprite = function () {
    if (!this._cachedSprite) {
        return;
    }

    // TODO: Pool this sprite
    this._cachedSprite.destroy(true, true);
    this._cachedSprite = null;
};

},{"../math":12,"../textures/RenderTexture":43,"./DisplayObject":5}],7:[function(require,module,exports){
var math = require('../math'),
    Texture = require('../textures/Texture'),
    DisplayObjectContainer = require('./DisplayObjectContainer'),
    CanvasTinter = require('../renderers/canvas/utils/CanvasTinter'),
    utils = require('../utils'),
    CONST = require('../const');

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 *
 * ```js
 * var sprite = new Sprite.fromImage('assets/image.png');
 * ```
 *
 * @class Sprite
 * @extends DisplayObjectContainer
 * @namespace PIXI
 * @param texture {Texture} The texture for this sprite
 */
function Sprite(texture) {
    DisplayObjectContainer.call(this);

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting than anchor to 0.5,0.5 means the textures origin is centered
     * Setting the anchor to 1,1 would mean the textures origin points will be the bottom right corner
     *
     * @member {Point}
     */
    this.anchor = new math.Point();

    /**
     * The texture that the sprite is using
     *
     * @member {Texture}
     * @private
     */
    this._texture = null;

    /**
     * The width of the sprite (this is initially set by the texture)
     *
     * @member {number}
     * @private
     */
    this._width = 0;

    /**
     * The height of the sprite (this is initially set by the texture)
     *
     * @member {number}
     * @private
     */
    this._height = 0;

    /**
     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the sprite. Set to CONST.blendModes.NORMAL to remove any blend mode.
     *
     * @member {number}
     * @default CONST.blendModes.NORMAL;
     */
    this.blendMode = CONST.blendModes.NORMAL;

    /**
     * The shader that will be used to render the sprite. Set to null to remove a current shader.
     *
     * @member {AbstractFilter}
     */
    this.shader = null;

    this.renderable = true;

    // call texture setter
    this.texture = texture || Texture.EMPTY;
}

Sprite.prototype.destroy = function (destroyTexture, destroyBaseTexture) {
    DisplayObjectContainer.prototype.destroy.call(this);

    this.anchor = null;

    if (destroyTexture) {
        this._texture.destroy(destroyBaseTexture);
    }

    this._texture = null;
    this.shader = null;
};

// constructor
Sprite.prototype = Object.create(DisplayObjectContainer.prototype);
Sprite.prototype.constructor = Sprite;
module.exports = Sprite;

Object.defineProperties(Sprite.prototype, {
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    width: {
        get: function () {
            return this.scale.x * this.texture.frame.width;
        },
        set: function (value) {
            this.scale.x = value / this.texture.frame.width;
            this._width = value;
        }
    },

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    height: {
        get: function () {
            return  this.scale.y * this.texture.frame.height;
        },
        set: function (value) {
            this.scale.y = value / this.texture.frame.height;
            this._height = value;
        }
    },

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member
     * @memberof Sprite#
     */
    texture: {
        get: function () {
            return  this._texture;
        },
        set: function (value) {
            if (this._texture === value) {
                return;
            }

            this._texture = value;
            this.cachedTint = 0xFFFFFF;

            if (value) {
                // wait for the texture to load
                if (value.baseTexture.hasLoaded) {
                    this._onTextureUpdate();
                }
                else {
                    value.once('update', this._onTextureUpdate.bind(this));
                }
            }
        }
    },
});

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @private
 */
Sprite.prototype._onTextureUpdate = function () {
    // so if _width is 0 then width was not set..
    if (this._width) {
        this.scale.x = this._width / this.texture.frame.width;
    }

    if (this._height) {
        this.scale.y = this._height / this.texture.frame.height;
    }
};

/**
 * Returns the bounds of the Sprite as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @param matrix {Matrix} the transformation matrix of the sprite
 * @return {Rectangle} the framing rectangle
 */
Sprite.prototype.getBounds = function (matrix) {
    var width = this.texture.frame.width;
    var height = this.texture.frame.height;

    var w0 = width * (1-this.anchor.x);
    var w1 = width * -this.anchor.x;

    var h0 = height * (1-this.anchor.y);
    var h1 = height * -this.anchor.y;

    var worldTransform = matrix || this.worldTransform ;

    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var minX,
        maxX,
        minY,
        maxY;

    if(b === 0 && c === 0)
    {
        // scale may be negative!
        if (a < 0) {
            a *= -1;
        }

        if (d < 0) {
            d *= -1;
        }

        // this means there is no rotation going on right? RIGHT?
        // if thats the case then we can avoid checking the bound values! yay
        minX = a * w1 + tx;
        maxX = a * w0 + tx;
        minY = d * h1 + ty;
        maxY = d * h0 + ty;
    }
    else
    {
        var x1 = a * w1 + c * h1 + tx;
        var y1 = d * h1 + b * w1 + ty;

        var x2 = a * w0 + c * h1 + tx;
        var y2 = d * h1 + b * w0 + ty;

        var x3 = a * w0 + c * h0 + tx;
        var y3 = d * h0 + b * w0 + ty;

        var x4 =  a * w1 + c * h0 + tx;
        var y4 =  d * h0 + b * w1 + ty;

        minX = x1;
        minX = x2 < minX ? x2 : minX;
        minX = x3 < minX ? x3 : minX;
        minX = x4 < minX ? x4 : minX;

        minY = y1;
        minY = y2 < minY ? y2 : minY;
        minY = y3 < minY ? y3 : minY;
        minY = y4 < minY ? y4 : minY;

        maxX = x1;
        maxX = x2 > maxX ? x2 : maxX;
        maxX = x3 > maxX ? x3 : maxX;
        maxX = x4 > maxX ? x4 : maxX;

        maxY = y1;
        maxY = y2 > maxY ? y2 : maxY;
        maxY = y3 > maxY ? y3 : maxY;
        maxY = y4 > maxY ? y4 : maxY;
    }

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.width = maxX - minX;

    bounds.y = minY;
    bounds.height = maxY - minY;

    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    this._currentBounds = bounds;

    return bounds;
};

/**
* Renders the object using the Canvas renderer
*
* @param renderer {CanvasRenderer} The renderer
*/
Sprite.prototype.renderCanvas = function (renderer) {
    if (!this.visible || this.alpha <= 0 || this.texture.crop.width <= 0 || this.texture.crop.height <= 0) {
        return;
    }

    if (this.blendMode !== renderer.currentBlendMode) {
        renderer.currentBlendMode = this.blendMode;
        renderer.context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    if (this._mask) {
        renderer.maskManager.pushMask(this._mask, renderer);
    }

    //  Ignore null sources
    if (this.texture.valid) {
        var resolution = this.texture.baseTexture.resolution / renderer.resolution;

        renderer.context.globalAlpha = this.worldAlpha;

        // If smoothingEnabled is supported and we need to change the smoothing property for this texture
        if (renderer.smoothProperty && renderer.scaleMode !== this.texture.baseTexture.scaleMode) {
            renderer.scaleMode = this.texture.baseTexture.scaleMode;
            renderer.context[renderer.smoothProperty] = (renderer.scaleMode === CONST.scaleModes.LINEAR);
        }

        // If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions
        var dx = (this.texture.trim ? this.texture.trim.x : 0) - (this.anchor.x * this.texture.trim.width);
        var dy = (this.texture.trim ? this.texture.trim.y : 0) - (this.anchor.y * this.texture.trim.height);

        // Allow for pixel rounding
        if (renderer.roundPixels) {
            renderer.context.setTransform(
                this.worldTransform.a,
                this.worldTransform.b,
                this.worldTransform.c,
                this.worldTransform.d,
                (this.worldTransform.tx * renderer.resolution) | 0,
                (this.worldTransform.ty * renderer.resolution) | 0
            );

            dx = dx | 0;
            dy = dy | 0;
        }
        else {
            renderer.context.setTransform(
                this.worldTransform.a,
                this.worldTransform.b,
                this.worldTransform.c,
                this.worldTransform.d,
                this.worldTransform.tx * renderer.resolution,
                this.worldTransform.ty * renderer.resolution
            );
        }

        if (this.tint !== 0xFFFFFF) {
            if (this.cachedTint !== this.tint) {
                this.cachedTint = this.tint;

                // TODO clean up caching - how to clean up the caches?
                this.tintedTexture = CanvasTinter.getTintedTexture(this, this.tint);
            }

            renderer.context.drawImage(
                this.tintedTexture,
                0,
                0,
                this.texture.crop.width,
                this.texture.crop.height,
                dx / resolution,
                dy / resolution,
                this.texture.crop.width / resolution,
                this.texture.crop.height / resolution
            );
        }
        else {
            renderer.context.drawImage(
                this.texture.baseTexture.source,
                this.texture.crop.x,
                this.texture.crop.y,
                this.texture.crop.width,
                this.texture.crop.height,
                dx / resolution,
                dy / resolution,
                this.texture.crop.width / resolution,
                this.texture.crop.height / resolution
            );
        }
    }

    for (var i = 0, j = this.children.length; i < j; i++) {
        this.children[i].renderCanvas(renderer);
    }

    if (this._mask) {
        renderer.maskManager.popMask(renderer);
    }
};

// some helper functions..

/**
 * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
 * The frame ids are created when a Texture packer file has been loaded
 *
 * @static
 * @param frameId {String} The frame Id of the texture in the cache
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId
 */
Sprite.fromFrame = function (frameId) {
    var texture = utils.TextureCache[frameId];

    if (!texture) {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache' + this);
    }

    return new Sprite(texture);
};

/**
 * Helper function that creates a sprite that will contain a texture based on an image url
 * If the image is not in the texture cache it will be loaded
 *
 * @static
 * @param imageId {String} The image url of the texture
 * @return {Sprite} A new Sprite using a texture from the texture cache matching the image id
 */
Sprite.fromImage = function (imageId, crossorigin, scaleMode) {
    return new Sprite(Texture.fromImage(imageId, crossorigin, scaleMode));
};

},{"../const":4,"../math":12,"../renderers/canvas/utils/CanvasTinter":24,"../textures/Texture":44,"../utils":50,"./DisplayObjectContainer":6}],8:[function(require,module,exports){
var DisplayObjectContainer = require('./DisplayObjectContainer'),
    WebGLFastSpriteBatch = require('../renderers/webgl/utils/WebGLFastSpriteBatch');

/**
 * The SpriteBatch class is a really fast version of the DisplayObjectContainer built solely for speed,
 * so use when you need a lot of sprites or particles. The tradeoff of the SpriteBatch is that advanced
 * functionality will not work. SpriteBatch implements only the basic object transform (position, scale, rotation).
 * Any other functionality like tinting, masking, etc will not work on sprites in this batch.
 *
 * It's extremely easy to use :
 *
 * ```js
 * var container = new SpriteBatch();
 *
 * for(var i = 0; i < 100; ++i) {
 *     var sprite = new PIXI.Sprite.fromImage("myImage.png");
 *     container.addChild(sprite);
 * }
 * ```
 *
 * And here you have a hundred sprites that will be renderer at the speed of light.
 *
 * @class
 * @namespace PIXI
 */

//TODO RENAME to PARTICLE CONTAINER?
function SpriteBatch() {
    DisplayObjectContainer.call(this);
}

SpriteBatch.prototype = Object.create(DisplayObjectContainer.prototype);
SpriteBatch.prototype.constructor = SpriteBatch;
module.exports = SpriteBatch;

/**
 * Updates the object transform for rendering
 *
 * @private
 */
SpriteBatch.prototype.updateTransform = function () {
    // TODO don't need to!
    this.displayObjectUpdateTransform();
    //  PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer} The webgl renderer
 * @private
 */
SpriteBatch.prototype.renderWebGL = function (renderer) {
    if (!this.visible || this.alpha <= 0 || !this.children.length) {
        return;
    }

    renderer.spriteBatch.stop();

    renderer.shaderManager.setShader(renderer.shaderManager.fastShader);

    renderer.fastSpriteBatch.begin(this);
    renderer.fastSpriteBatch.render(this);

    renderer.spriteBatch.start();
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer} The canvas renderer
 * @private
 */
SpriteBatch.prototype.renderCanvas = function (renderer) {
    if (!this.visible || this.alpha <= 0 || !this.children.length) {
        return;
    }

    var context = renderer.context;
    var transform = this.worldTransform;
    var isRotated = true;

    context.globalAlpha = this.worldAlpha;

    this.displayObjectUpdateTransform();

    for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i];

        if (!child.visible) {
            continue;
        }

        var frame = child.texture.frame;

        context.globalAlpha = this.worldAlpha * child.alpha;

        if (child.rotation % (Math.PI * 2) === 0) {
            // this is the fastest  way to optimise! - if rotation is 0 then we can avoid any kind of setTransform call
            if (isRotated) {
                context.setTransform(
                    transform.a,
                    transform.b,
                    transform.c,
                    transform.d,
                    transform.tx,
                    transform.ty
                );

                isRotated = false;
            }

            context.drawImage(
                child.texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                ((child.anchor.x) * (-frame.width * child.scale.x) + child.position.x  + 0.5) | 0,
                ((child.anchor.y) * (-frame.height * child.scale.y) + child.position.y  + 0.5) | 0,
                frame.width * child.scale.x,
                frame.height * child.scale.y
            );
        }
        else {
            if (!isRotated) {
                isRotated = true;
            }

            child.displayObjectUpdateTransform();

            var childTransform = child.worldTransform;

            if (renderer.roundPixels) {
                context.setTransform(
                    childTransform.a,
                    childTransform.b,
                    childTransform.c,
                    childTransform.d,
                    childTransform.tx | 0,
                    childTransform.ty | 0
                );
            }
            else {
                context.setTransform(
                    childTransform.a,
                    childTransform.b,
                    childTransform.c,
                    childTransform.d,
                    childTransform.tx,
                    childTransform.ty
                );
            }

            context.drawImage(
                child.texture.baseTexture.source,
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                ((child.anchor.x) * (-frame.width) + 0.5) | 0,
                ((child.anchor.y) * (-frame.height) + 0.5) | 0,
                frame.width,
                frame.height
            );
        }
    }
};

},{"../renderers/webgl/utils/WebGLFastSpriteBatch":38,"./DisplayObjectContainer":6}],9:[function(require,module,exports){
/**
 * @file        Main export of the PIXI core library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
var core = module.exports = {
    CONST: require('./const'),

    // utils
    utils: require('./utils'),
    math: require('./math'),

    // display
    DisplayObject:          require('./display/DisplayObject'),
    DisplayObjectContainer: require('./display/DisplayObjectContainer'),
    Sprite:                 require('./display/Sprite'),
    SpriteBatch:            require('./display/SpriteBatch'),

    // primitives
    Graphics:               require('./primitives/Graphics'),
    GraphicsData:           require('./primitives/GraphicsData'),

    // textures
    Texture:                require('./textures/Texture'),
    BaseTexture:            require('./textures/BaseTexture'),
    RenderTexture:          require('./textures/RenderTexture'),
    VideoBaseTexture:       require('./textures/VideoBaseTexture'),

    // renderers - canvas
    CanvasRenderer:         require('./renderers/canvas/CanvasRenderer'),
    CanvasGraphics:         require('./renderers/canvas/utils/CanvasGraphics'),
    CanvasBuffer:           require('./renderers/canvas/utils/CanvasBuffer'),

    // renderers - webgl
    WebGLRenderer:         require('./renderers/webgl/WebGLRenderer'),
    WebGLGraphics:         require('./renderers/webgl/utils/WebGLGraphics'),

    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If webGL is not supported by
     * the browser then this function will return a canvas renderer
     *
     * @param width=800 {number} the width of the renderers view
     * @param height=600 {number} the height of the renderers view
     * @param [options] {object} The optional renderer parameters
     * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
     * @param [options.transparent=false] {boolean} If the render view is transparent, default false
     * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
     * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
     *      need to call toDataUrl on the webgl context
     * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
     * @param [noWebGL=false] {Boolean} prevents selection of WebGL renderer, even if such is present
     *
     * @return {WebGLRenderer|CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    autoDetectRenderer: function (width, height, options, noWebGL) {
        width = width || 800;
        height = height || 600;

        if (!noWebGL && require('webgl-enabled')()) {
            return new core.WebGLRenderer(width, height, options);
        }

        return new core.CanvasRenderer(width, height, options);
    },

    /**
     * This helper function will automatically detect which renderer you should be using. This function is very
     * similar to the autoDetectRenderer function except that is will return a canvas renderer for android.
     * Even thought both android chrome supports webGL the canvas implementation perform better at the time of writing.
     * This function will likely change and update as webGL performance improves on these devices.
     *
     * @param width=800 {number} the width of the renderers view
     * @param height=600 {number} the height of the renderers view
     * @param [options] {object} The optional renderer parameters
     * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
     * @param [options.transparent=false] {boolean} If the render view is transparent, default false
     * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
     * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you
     *      need to call toDataUrl on the webgl context
     * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
     *
     * @return {WebGLRenderer|CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    autoDetectRecommendedRenderer: function (width, height, options) {
        var isAndroid = /Android/i.test(navigator.userAgent);

        return core.autoDetectRenderer(width, height, options, isAndroid);
    }
};

},{"./const":4,"./display/DisplayObject":5,"./display/DisplayObjectContainer":6,"./display/Sprite":7,"./display/SpriteBatch":8,"./math":12,"./primitives/Graphics":18,"./primitives/GraphicsData":19,"./renderers/canvas/CanvasRenderer":20,"./renderers/canvas/utils/CanvasBuffer":21,"./renderers/canvas/utils/CanvasGraphics":22,"./renderers/webgl/WebGLRenderer":25,"./renderers/webgl/utils/WebGLGraphics":39,"./textures/BaseTexture":42,"./textures/RenderTexture":43,"./textures/Texture":44,"./textures/VideoBaseTexture":46,"./utils":50,"webgl-enabled":2}],10:[function(require,module,exports){
var Point = require('./Point');

/**
 * The Matrix class is now an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @namespace PIXI
 */
function Matrix() {
    /**
     * @member {number}
     * @default 1
     */
    this.a = 1;

    /**
     * @member {number}
     * @default 0
     */
    this.b = 0;

    /**
     * @member {number}
     * @default 0
     */
    this.c = 0;

    /**
     * @member {number}
     * @default 1
     */
    this.d = 1;

    /**
     * @member {number}
     * @default 0
     */
    this.tx = 0;

    /**
     * @member {number}
     * @default 0
     */
    this.ty = 0;
}

Matrix.prototype.constructor = Matrix;
module.exports = Matrix;

/**
 * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
 *
 * a = array[0]
 * b = array[1]
 * c = array[3]
 * d = array[4]
 * tx = array[2]
 * ty = array[5]
 *
 * @param array {number[]} The array that the matrix will be populated from.
 */
Matrix.prototype.fromArray = function (array) {
    this.a = array[0];
    this.b = array[1];
    this.c = array[3];
    this.d = array[4];
    this.tx = array[2];
    this.ty = array[5];
};

/**
 * Creates an array from the current Matrix object.
 *
 * @param transpose {boolean} Whether we need to transpose the matrix or not
 * @return {number[]} the newly created array which contains the matrix
 */
Matrix.prototype.toArray = function (transpose) {
    if (!this.array) {
        this.array = new Float32Array(9);
    }

    var array = this.array;

    if (transpose) {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = 0;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
    }
    else {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = this.tx;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
    }

    return array;
};

/**
 * Get a new position with the current transformation applied.
 * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
 *
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, transformed through this matrix
 */
Matrix.prototype.apply = function (pos, newPos) {
    newPos = newPos || new Point();

    newPos.x = this.a * pos.x + this.c * pos.y + this.tx;
    newPos.y = this.b * pos.x + this.d * pos.y + this.ty;

    return newPos;
};

/**
 * Get a new position with the inverse of the current transformation applied.
 * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
 *
 * @param pos {Point} The origin
 * @param [newPos] {Point} The point that the new position is assigned to (allowed to be same as input)
 * @return {Point} The new point, inverse-transformed through this matrix
 */
Matrix.prototype.applyInverse = function (pos, newPos) {
    newPos = newPos || new Point();

    var id = 1 / (this.a * this.d + this.c * -this.b);

    newPos.x = this.d * id * pos.x + -this.c * id * pos.y + (this.ty * this.c - this.tx * this.d) * id;
    newPos.y = this.a * id * pos.y + -this.b * id * pos.x + (-this.ty * this.a + this.tx * this.b) * id;

    return newPos;
};

/**
 * Translates the matrix on the x and y.
 *
 * @param {number} x
 * @param {number} y
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.translate = function (x, y) {
    this.tx += x;
    this.ty += y;

    return this;
};

/**
 * Applies a scale transformation to the matrix.
 *
 * @param {number} x The amount to scale horizontally
 * @param {number} y The amount to scale vertically
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.scale = function (x, y) {
    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.tx *= x;
    this.ty *= y;

    return this;
};


/**
 * Applies a rotation transformation to the matrix.
 *
 * @param {number} angle - The angle in radians.
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.rotate = function (angle) {
    var cos = Math.cos( angle );
    var sin = Math.sin( angle );

    var a1 = this.a;
    var c1 = this.c;
    var tx1 = this.tx;

    this.a = a1 * cos-this.b * sin;
    this.b = a1 * sin+this.b * cos;
    this.c = c1 * cos-this.d * sin;
    this.d = c1 * sin+this.d * cos;
    this.tx = tx1 * cos - this.ty * sin;
    this.ty = tx1 * sin + this.ty * cos;

    return this;
};

/**
 * Appends the given Matrix to this Matrix.
 *
 * @param {Matrix} matrix
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.append = function (matrix) {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;

    this.a  = matrix.a * a1 + matrix.b * c1;
    this.b  = matrix.a * b1 + matrix.b * d1;
    this.c  = matrix.c * a1 + matrix.d * c1;
    this.d  = matrix.c * b1 + matrix.d * d1;

    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

    return this;
};

/**
 * Resets this Matix to an identity (default) matrix.
 *
 * @return {Matrix} This matrix. Good for chaining method calls.
 */
Matrix.prototype.identity = function () {
    this.a = 1;
    this.b = 0;
    this.c = 0;
    this.d = 1;
    this.tx = 0;
    this.ty = 0;

    return this;
};

Matrix.IDENTITY = new Matrix();

},{"./Point":11}],11:[function(require,module,exports){
/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @namespace PIXI
 * @param [x=0] {number} position of the point on the x axis
 * @param [y=0] {number} position of the point on the y axis
 */
function Point(x, y) {
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;
}

Point.prototype.constructor = Point;
module.exports = Point;

/**
 * Creates a clone of this point
 *
 * @return {Point} a copy of the point
 */
Point.prototype.clone = function () {
    return new Point(this.x, this.y);
};

/**
 * Sets the point to a new x and y position.
 * If y is omitted, both x and y will be set to x.
 *
 * @param [x=0] {number} position of the point on the x axis
 * @param [y=0] {number} position of the point on the y axis
 */
Point.prototype.set = function (x, y) {
    this.x = x || 0;
    this.y = y || ( (y !== 0) ? this.x : 0 ) ;
};

},{}],12:[function(require,module,exports){
/**
 * @namespace PIXI.math
 */
module.exports = {
    /**
     * @property {number} PI_2 - Math.PI x 2
     * @constant
     * @static
     */
    PI_2: Math.PI * 2,

    /**
     * @property {number} RAD_TO_DEG - Constant conversion factor for converting radians to degrees
     * @constant
     * @static
     */
    RAD_TO_DEG: 180 / Math.PI,

    /**
     * @property {Number} DEG_TO_RAD - Constant conversion factor for converting degrees to radians
     * @constant
     * @static
     */
    DEG_TO_RAD: Math.PI / 180,

    Point:      require('./Point'),
    Matrix:     require('./Matrix'),

    Circle:     require('./shapes/Circle'),
    Ellipse:    require('./shapes/Ellipse'),
    Polygon:    require('./shapes/Polygon'),
    Rectangle:  require('./shapes/Rectangle'),
    RoundedRectangle: require('./shapes/RoundedRectangle')
};

},{"./Matrix":10,"./Point":11,"./shapes/Circle":13,"./shapes/Ellipse":14,"./shapes/Polygon":15,"./shapes/Rectangle":16,"./shapes/RoundedRectangle":17}],13:[function(require,module,exports){
var Rectangle = require('./Rectangle'),
    CONST = require('../../const');

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class
 * @namespace PIXI
 * @param x {number} The X coordinate of the center of this circle
 * @param y {number} The Y coordinate of the center of this circle
 * @param radius {number} The radius of the circle
 */
function Circle(x, y, radius) {
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.radius = radius || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.CIRC;
}

Circle.prototype.constructor = Circle;
module.exports = Circle;

/**
 * Creates a clone of this Circle instance
 *
 * @method clone
 * @return {Circle} a copy of the Circle
 */
Circle.prototype.clone = function () {
    return new Circle(this.x, this.y, this.radius);
};

/**
 * Checks whether the x and y coordinates given are contained within this circle
 *
 * @method contains
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Circle
 */
Circle.prototype.contains = function (x, y) {
    if (this.radius <= 0) {
        return false;
    }

    var dx = (this.x - x),
        dy = (this.y - y),
        r2 = this.radius * this.radius;

    dx *= dx;
    dy *= dy;

    return (dx + dy <= r2);
};

/**
* Returns the framing rectangle of the circle as a Rectangle object
*
* @method getBounds
* @return {Rectangle} the framing rectangle
*/
Circle.prototype.getBounds = function () {
    return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
};

},{"../../const":4,"./Rectangle":16}],14:[function(require,module,exports){
var Rectangle = require('./Rectangle'),
    CONST = require('../../const');

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class
 * @namespace PIXI
 * @param x {number} The X coordinate of the center of the ellipse
 * @param y {number} The Y coordinate of the center of the ellipse
 * @param width {number} The half width of this ellipse
 * @param height {number} The half height of this ellipse
 */
function Ellipse(x, y, width, height) {
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.ELIP;
}

Ellipse.prototype.constructor = Ellipse;
module.exports = Ellipse;

/**
 * Creates a clone of this Ellipse instance
 *
 * @method clone
 * @return {Ellipse} a copy of the ellipse
 */
Ellipse.prototype.clone = function () {
    return new Ellipse(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates given are contained within this ellipse
 *
 * @method contains
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coords are within this ellipse
 */
Ellipse.prototype.contains = function (x, y) {
    if (this.width <= 0 || this.height <= 0) {
        return false;
    }

    //normalize the coords to an ellipse with center 0,0
    var normx = ((x - this.x) / this.width),
        normy = ((y - this.y) / this.height);

    normx *= normx;
    normy *= normy;

    return (normx + normy <= 1);
};

/**
* Returns the framing rectangle of the ellipse as a Rectangle object
*
* @method getBounds
* @return {Rectangle} the framing rectangle
*/
Ellipse.prototype.getBounds = function () {
    return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
};

},{"../../const":4,"./Rectangle":16}],15:[function(require,module,exports){
var Point = require('../Point'),
    CONST = require('../../const');

/**
 * @class
 * @namespace PIXI
 * @param points* {Point[]|number[]|Point...|number...} This can be an array of Points that form the polygon,
 *      a flat array of numbers that will be interpreted as [x,y, x,y, ...], or the arguments passed can be
 *      all the points of the polygon e.g. `new Polygon(new Point(), new Point(), ...)`, or the
 *      arguments passed can be flat x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are
 *      Numbers.
 */
function Polygon(points) {
    //if points isn't an array, use arguments as the array
    if (!(points instanceof Array)) {
        points = Array.prototype.slice.call(arguments);
    }

    //if this is a flat array of numbers, convert it to points
    if (points[0] instanceof Point) {
        var p = [];
        for (var i = 0, il = points.length; i < il; i++) {
            p.push(points[i].x, points[i].y);
        }

        points = p;
    }

    this.closed = true;

    /**
     * An array of the points of this polygon
     *
     * @member {Point[]}
     */
    this.points = points;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.POLY;
}

Polygon.prototype.constructor = Polygon;
module.exports = Polygon;

/**
 * Creates a clone of this polygon
 *
 * @return {Polygon} a copy of the polygon
 */
Polygon.prototype.clone = function () {
    return new Polygon(this.points.slice());
};

/**
 * Checks whether the x and y coordinates passed to this function are contained within this polygon
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this polygon
 */
Polygon.prototype.contains = function (x, y) {
    var inside = false;

    // use some raycasting to test hits
    // https://github.com/substack/point-in-polygon/blob/master/index.js
    var length = this.points.length / 2;

    for (var i = 0, j = length - 1; i < length; j = i++) {
        var xi = this.points[i * 2], yi = this.points[i * 2 + 1],
            xj = this.points[j * 2], yj = this.points[j * 2 + 1],
            intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

        if (intersect) {
            inside = !inside;
        }
    }

    return inside;
};

},{"../../const":4,"../Point":11}],16:[function(require,module,exports){
var CONST = require('../../const');

/**
 * the Rectangle object is an area defined by its position, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class
 * @namespace PIXI
 * @param x {number} The X coordinate of the upper-left corner of the rectangle
 * @param y {number} The Y coordinate of the upper-left corner of the rectangle
 * @param width {number} The overall width of this rectangle
 * @param height {number} The overall height of this rectangle
 */
function Rectangle(x, y, width, height) {
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.RECT;
}

Rectangle.prototype.constructor = Rectangle;
module.exports = Rectangle;

/**
 * A constant empty rectangle.
 *
 * @static
 * @constant
 */
Rectangle.EMPTY = new Rectangle(0, 0, 0, 0);


/**
 * Creates a clone of this Rectangle
 *
 * @return {Rectangle} a copy of the rectangle
 */
Rectangle.prototype.clone = function () {
    return new Rectangle(this.x, this.y, this.width, this.height);
};

/**
 * Checks whether the x and y coordinates given are contained within this Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rectangle
 */
Rectangle.prototype.contains = function (x, y) {
    if (this.width <= 0 || this.height <= 0) {
        return false;
    }

    if (x >= this.x && x <= this.x + this.width) {
        if (y >= this.y && y <= this.y + this.height) {
            return true;
        }
    }

    return false;
};

},{"../../const":4}],17:[function(require,module,exports){
var CONST = require('../../const');

/**
 * The Rounded Rectangle object is an area defined by its position and has nice rounded corners, as indicated by its top-left corner point (x, y) and by its width and its height.
 *
 * @class
 * @namespace PIXI
 * @param x {number} The X coordinate of the upper-left corner of the rounded rectangle
 * @param y {number} The Y coordinate of the upper-left corner of the rounded rectangle
 * @param width {number} The overall width of this rounded rectangle
 * @param height {number} The overall height of this rounded rectangle
 * @param radius {number} Controls the radius of the rounded corners
 */
function RoundedRectangle(x, y, width, height, radius) {
    /**
     * @member {number}
     * @default 0
     */
    this.x = x || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width || 0;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height || 0;

    /**
     * @member {number}
     * @default 20
     */
    this.radius = radius || 20;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     */
    this.type = CONST.SHAPES.RREC;
}

RoundedRectangle.prototype.constructor = RoundedRectangle;
module.exports = RoundedRectangle;

/**
 * Creates a clone of this Rounded Rectangle
 *
 * @return {RoundedRectangle} a copy of the rounded rectangle
 */
RoundedRectangle.prototype.clone = function () {
    return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
};

/**
 * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
 *
 * @param x {number} The X coordinate of the point to test
 * @param y {number} The Y coordinate of the point to test
 * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
 */
RoundedRectangle.prototype.contains = function (x, y) {
    if (this.width <= 0 || this.height <= 0) {
        return false;
    }

    if (x >= this.x && x <= this.x + this.width) {
        if (y >= this.y && y <= this.y + this.height) {
            return true;
        }
    }

    return false;
};

},{"../../const":4}],18:[function(require,module,exports){
var DisplayObjectContainer = require('../display/DisplayObjectContainer'),
    Sprite = require('../display/Sprite'),
    Texture = require('../textures/Texture'),
    CanvasBuffer = require('../renderers/canvas/utils/CanvasBuffer'),
    CanvasGraphics = require('../renderers/canvas/utils/CanvasGraphics'),
    WebGLGraphics = require('../renderers/webgl/utils/WebGLGraphics'),
    GraphicsData = require('./GraphicsData'),
    math = require('../math'),
    CONST = require('../const');

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and color and fill them.
 *
 * @class
 * @extends DisplayObjectContainer
 * @namespace PIXI
 */
function Graphics() {
    DisplayObjectContainer.call(this);

    this.renderable = true;

    /**
     * The alpha value used when filling the Graphics object.
     *
     * @member {number}
     * @default 1
     */
    this.fillAlpha = 1;

    /**
     * The width (thickness) of any lines drawn.
     *
     * @member {number}
     * @default 0
     */
    this.lineWidth = 0;

    /**
     * The color of any lines drawn.
     *
     * @member {string}
     * @default 0
     */
    this.lineColor = 0;

    /**
     * Graphics data
     *
     * @member {GraphicsData[]}
     * @private
     */
    this.graphicsData = [];

    /**
     * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to reset the tint.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the graphic shape. Apply a value of blendModes.NORMAL to reset the blend mode.
     *
     * @member {number}
     * @default CONST.blendModes.NORMAL;
     */
    this.blendMode = CONST.blendModes.NORMAL;

    /**
     * Current path
     *
     * @member {GraphicsData}
     * @private
     */
    this.currentPath = null;

    /**
     * Array containing some WebGL-related properties used by the WebGL renderer.
     *
     * @member {object<number, object>}
     * @private
     */
    // TODO - _webgl should use a prototype object, not a random undocumented object...
    this._webGL = {};

    /**
     * Whether this shape is being used as a mask.
     *
     * @member {boolean}
     */
    this.isMask = false;

    /**
     * The bounds' padding used for bounds calculation.
     *
     * @member {number}
     */
    this.boundsPadding = 0;

    /**
     * A cache of the local bounds to prevent recalculation.
     *
     * @member {Rectangle}
     * @private
     */
    this._localBounds = new math.Rectangle(0,0,1,1);

    /**
     * Used to detect if the graphics object has changed. If this is set to true then the graphics
     * object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    this.dirty = true;

    /**
     * Used to detect if the WebGL graphics object has changed. If this is set to true then the
     * graphics object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    this.glDirty = false;

    /**
     * Used to detect if the cached sprite object needs to be updated.
     *
     * @member {boolean}
     * @private
     */
    this.cachedSpriteDirty = false;
}

// constructor
Graphics.prototype = Object.create(DisplayObjectContainer.prototype);
Graphics.prototype.constructor = Graphics;
module.exports = Graphics;

Object.defineProperties(Graphics.prototype, {
    /**
     * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
     * This is useful if your graphics element does not change often, as it will speed up the rendering
     * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
     * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
     * you are constantly redrawing the graphics element.
     *
     * @member {boolean}
     * @memberof Graphics#
     * @default false
     * @private
     */
    cacheAsBitmap: {
        get: function () {
            return this._cacheAsBitmap;
        },
        set: function (value) {
            this._cacheAsBitmap = value;

            if (this._cacheAsBitmap) {
                this._generateCachedSprite();
            }
            else {
                this.destroyCachedSprite();
                this.dirty = true;
            }
        }
    }
});

/**
 * Creates a new Graphics object with the same values as this one.
 *
 * @return {Graphics}
 */
GraphicsData.prototype.clone = function () {
    var clone = new Graphics();

    clone.renderable    = this.renderable;
    clone.fillAlpha     = this.fillAlpha;
    clone.lineWidth     = this.lineWidth;
    clone.lineColor     = this.lineColor;
    clone.tint          = this.tint;
    clone.blendMode     = this.blendMode;
    clone.isMask        = this.isMask;
    clone.boundsPadding = this.boundsPadding;
    clone.dirty         = this.dirty;
    clone.glDirty       = this.glDirty;
    clone.cachedSpriteDirty = this.cachedSpriteDirty;

    // copy graphics data
    for (var i = 0; i < this.graphicsData.length; ++i) {
        clone.graphicsData.push(this.graphicsData.clone());
    }

    clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

    clone.updateLocalBounds();

    return clone;
};

/**
 * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo() method or the drawCircle() method.
 *
 * @param lineWidth {number} width of the line to draw, will update the objects stored style
 * @param color {number} color of the line to draw, will update the objects stored style
 * @param alpha {number} alpha of the line to draw, will update the objects stored style
 * @return {Graphics}
 */
Graphics.prototype.lineStyle = function (lineWidth, color, alpha) {
    this.lineWidth = lineWidth || 0;
    this.lineColor = color || 0;
    this.lineAlpha = (arguments.length < 3) ? 1 : alpha;

    if (this.currentPath) {
        if (this.currentPath.shape.points.length) {
            // halfway through a line? start a new one!
            this.drawShape( new math.Polygon( this.currentPath.shape.points.slice(-2) ));
        }
        else {
            // otherwise its empty so lets just set the line properties
            this.currentPath.lineWidth = this.lineWidth;
            this.currentPath.lineColor = this.lineColor;
            this.currentPath.lineAlpha = this.lineAlpha;
        }
    }

    return this;
};

/**
 * Moves the current drawing position to x, y.
 *
 * @param x {number} the X coordinate to move to
 * @param y {number} the Y coordinate to move to
 * @return {Graphics}
  */
Graphics.prototype.moveTo = function (x, y) {
    this.drawShape(new math.Polygon([x,y]));

    return this;
};

/**
 * Draws a line using the current line style from the current drawing position to (x, y);
 * The current drawing position is then set to (x, y).
 *
 * @param x {number} the X coordinate to draw to
 * @param y {number} the Y coordinate to draw to
 * @return {Graphics}
 */
Graphics.prototype.lineTo = function (x, y) {
    this.currentPath.shape.points.push(x, y);
    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a quadratic bezier curve and then draws it.
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Graphics}
 */
Graphics.prototype.quadraticCurveTo = function (cpX, cpY, toX, toY) {
    if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
            this.currentPath.shape.points = [0, 0];
        }
    }
    else {
        this.moveTo(0,0);
    }

    var xa,
        ya,
        n = 20,
        points = this.currentPath.shape.points;

    if (points.length === 0) {
        this.moveTo(0, 0);
    }

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;
    for (var i = 1; i <= n; ++i) {
        j = i / n;

        xa = fromX + ( (cpX - fromX) * j );
        ya = fromY + ( (cpY - fromY) * j );

        points.push( xa + ( ((cpX + ( (toX - cpX) * j )) - xa) * j ),
                     ya + ( ((cpY + ( (toY - cpY) * j )) - ya) * j ) );
    }

    this.dirty = true;

    return this;
};

/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param cpX2 {number} Second Control point x
 * @param cpY2 {number} Second Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {Graphics}
 */
Graphics.prototype.bezierCurveTo = function (cpX, cpY, cpX2, cpY2, toX, toY) {
    if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
            this.currentPath.shape.points = [0, 0];
        }
    }
    else {
        this.moveTo(0,0);
    }

    var n = 20,
        dt,
        dt2,
        dt3,
        t2,
        t3,
        points = this.currentPath.shape.points;

    var fromX = points[points.length-2];
    var fromY = points[points.length-1];

    var j = 0;

    for (var i = 1; i <= n; ++i) {
        j = i / n;

        dt = (1 - j);
        dt2 = dt * dt;
        dt3 = dt2 * dt;

        t2 = j * j;
        t3 = t2 * j;

        points.push( dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX,
                     dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
    }

    this.dirty = true;

    return this;
};

/**
 * The arcTo() method creates an arc/curve between two tangents on the canvas.
 *
 * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
 *
 * @param x1 {number} The x-coordinate of the beginning of the arc
 * @param y1 {number} The y-coordinate of the beginning of the arc
 * @param x2 {number} The x-coordinate of the end of the arc
 * @param y2 {number} The y-coordinate of the end of the arc
 * @param radius {number} The radius of the arc
 * @return {Graphics}
 */
Graphics.prototype.arcTo = function (x1, y1, x2, y2, radius) {
    if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
            this.currentPath.shape.points.push(x1, y1);
        }
    }
    else {
        this.moveTo(x1, y1);
    }

    var points = this.currentPath.shape.points,
        fromX = points[points.length-2],
        fromY = points[points.length-1],
        a1 = fromY - y1,
        b1 = fromX - x1,
        a2 = y2   - y1,
        b2 = x2   - x1,
        mm = Math.abs(a1 * b2 - b1 * a2);

    if (mm < 1.0e-8 || radius === 0) {
        if (points[points.length-2] !== x1 || points[points.length-1] !== y1) {
            points.push(x1, y1);
        }
    }
    else {
        var dd = a1 * a1 + b1 * b1,
            cc = a2 * a2 + b2 * b2,
            tt = a1 * a2 + b1 * b2,
            k1 = radius * Math.sqrt(dd) / mm,
            k2 = radius * Math.sqrt(cc) / mm,
            j1 = k1 * tt / dd,
            j2 = k2 * tt / cc,
            cx = k1 * b2 + k2 * b1,
            cy = k1 * a2 + k2 * a1,
            px = b1 * (k2 + j1),
            py = a1 * (k2 + j1),
            qx = b2 * (k1 + j2),
            qy = a2 * (k1 + j2),
            startAngle = Math.atan2(py - cy, px - cx),
            endAngle   = Math.atan2(qy - cy, qx - cx);

        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
    }

    this.dirty = true;

    return this;
};

/**
 * The arc method creates an arc/curve (used to create circles, or parts of circles).
 *
 * @param cx {number} The x-coordinate of the center of the circle
 * @param cy {number} The y-coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @param startAngle {number} The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
 * @param endAngle {number} The ending angle, in radians
 * @param anticlockwise {boolean} Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
 * @return {Graphics}
 */
Graphics.prototype.arc = function (cx, cy, radius, startAngle, endAngle, anticlockwise) {
    var startX = cx + Math.cos(startAngle) * radius;
    var startY = cy + Math.sin(startAngle) * radius;
    var points;

    // TODO - This if-else makes no sense. It uses currentPath in the else where it doesn't exist...
    if (this.currentPath) {
        points = this.currentPath.shape.points;

        if (points.length === 0) {
            points.push(startX, startY);
        }
        else if (points[points.length-2] !== startX || points[points.length-1] !== startY) {
            points.push(startX, startY);
        }
    }
    else {
        this.moveTo(startX, startY);
        points = this.currentPath.shape.points;
    }

    if (startAngle === endAngle) {
        return this;
    }

    if (!anticlockwise && endAngle <= startAngle) {
        endAngle += Math.PI * 2;
    }
    else if (anticlockwise && startAngle <= endAngle) {
        startAngle += Math.PI * 2;
    }

    var sweep = anticlockwise ? (startAngle - endAngle) *-1 : (endAngle - startAngle);
    var segs = (Math.abs(sweep)/ (Math.PI * 2)) * 40;

    if (sweep === 0) {
        return this;
    }

    var theta = sweep/(segs*2);
    var theta2 = theta*2;

    var cTheta = Math.cos(theta);
    var sTheta = Math.sin(theta);

    var segMinus = segs - 1;

    var remainder = ( segMinus % 1 ) / segMinus;

    for (var i = 0; i <= segMinus; ++i) {
        var real =  i + remainder * i;
        var angle = ((theta) + startAngle + (theta2 * real));

        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push(( (cTheta *  c) + (sTheta * s) ) * radius + cx,
                    ( (cTheta * -s) + (sTheta * c) ) * radius + cy);
    }

    this.dirty = true;

    return this;
};

/**
 * Specifies a simple one-color fill that subsequent calls to other Graphics methods
 * (such as lineTo() or drawCircle()) use when drawing.
 *
 * @param color {number} the color of the fill
 * @param alpha {number} the alpha of the fill
 * @return {Graphics}
 */
Graphics.prototype.beginFill = function (color, alpha) {
    this.filling = true;
    this.fillColor = color || 0;
    this.fillAlpha = (alpha === undefined) ? 1 : alpha;

    if (this.currentPath) {
        if (this.currentPath.shape.points.length <= 2) {
            this.currentPath.fill = this.filling;
            this.currentPath.fillColor = this.fillColor;
            this.currentPath.fillAlpha = this.fillAlpha;
        }
    }
    return this;
};

/**
 * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
 *
 * @return {Graphics}
 */
Graphics.prototype.endFill = function () {
    this.filling = false;
    this.fillColor = null;
    this.fillAlpha = 1;

    return this;
};

/**
 *
 * @param x {number} The X coord of the top-left of the rectangle
 * @param y {number} The Y coord of the top-left of the rectangle
 * @param width {number} The width of the rectangle
 * @param height {number} The height of the rectangle
 * @return {Graphics}
 */
Graphics.prototype.drawRect = function ( x, y, width, height ) {
    this.drawShape(new math.Rectangle(x,y, width, height));

    return this;
};

/**
 *
 * @param x {number} The X coord of the top-left of the rectangle
 * @param y {number} The Y coord of the top-left of the rectangle
 * @param width {number} The width of the rectangle
 * @param height {number} The height of the rectangle
 * @param radius {number} Radius of the rectangle corners
 */
Graphics.prototype.drawRoundedRect = function ( x, y, width, height, radius ) {
    this.drawShape(new math.RoundedRectangle(x, y, width, height, radius));

    return this;
};

/**
 * Draws a circle.
 *
 * @param x {number} The X coordinate of the center of the circle
 * @param y {number} The Y coordinate of the center of the circle
 * @param radius {number} The radius of the circle
 * @return {Graphics}
 */
Graphics.prototype.drawCircle = function (x, y, radius) {
    this.drawShape(new math.Circle(x,y, radius));

    return this;
};

/**
 * Draws an ellipse.
 *
 * @param x {number} The X coordinate of the center of the ellipse
 * @param y {number} The Y coordinate of the center of the ellipse
 * @param width {number} The half width of the ellipse
 * @param height {number} The half height of the ellipse
 * @return {Graphics}
 */
Graphics.prototype.drawEllipse = function (x, y, width, height) {
    this.drawShape(new math.Ellipse(x, y, width, height));

    return this;
};

/**
 * Draws a polygon using the given path.
 *
 * @param path {Array} The path data used to construct the polygon.
 * @return {Graphics}
 */
Graphics.prototype.drawPolygon = function (path) {
    if (!(path instanceof Array)) {
        path = Array.prototype.slice.call(arguments);
    }

    this.drawShape(new math.Polygon(path));

    return this;
};

/**
 * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
 *
 * @return {Graphics}
 */
Graphics.prototype.clear = function () {
    this.lineWidth = 0;
    this.filling = false;

    this.dirty = true;
    this.clearDirty = true;
    this.graphicsData = [];

    return this;
};

/**
 * Useful function that returns a texture of the graphics object that can then be used to create sprites
 * This can be quite useful if your geometry is complicated and needs to be reused multiple times.
 *
 * @param resolution {number} The resolution of the texture being generated
 * @param scaleMode {number} Should be one of the scaleMode consts
 * @return {Texture} a texture of the graphics object
 */
Graphics.prototype.generateTexture = function (resolution, scaleMode) {
    resolution = resolution || 1;

    var bounds = this.getBounds();

    var canvasBuffer = new CanvasBuffer(bounds.width * resolution, bounds.height * resolution);

    var texture = Texture.fromCanvas(canvasBuffer.canvas, scaleMode);
    texture.baseTexture.resolution = resolution;

    canvasBuffer.context.scale(resolution, resolution);

    canvasBuffer.context.translate(-bounds.x,-bounds.y);

    CanvasGraphics.renderGraphics(this, canvasBuffer.context);

    return texture;
};

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer}
 */
Graphics.prototype.renderWebGL = function (renderer) {
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if (!this.visible || this.alpha <= 0 || this.isMask === true) {
        return;
    }

    if (this._cacheAsBitmap) {
        if (this.dirty || this.cachedSpriteDirty) {
            this._generateCachedSprite();

            // we will also need to update the texture on the gpu too!
            this.updateCachedSpriteTexture();

            this.cachedSpriteDirty = false;
            this.dirty = false;
        }

        this._cachedSprite.worldAlpha = this.worldAlpha;

        Sprite.prototype.renderWebGL.call(this._cachedSprite, renderer);

        return;
    }
    else {
        renderer.spriteBatch.stop();
        renderer.blendModeManager.setBlendMode(this.blendMode);

        if (this._mask) {
            renderer.maskManager.pushMask(this._mask, renderer);
        }

        if (this._filters) {
            renderer.filterManager.pushFilter(this._filterBlock);
        }

        // check blend mode
        if (this.blendMode !== renderer.spriteBatch.currentBlendMode) {
            renderer.spriteBatch.currentBlendMode = this.blendMode;

            var blendModeWebGL = renderer.blendModes[renderer.spriteBatch.currentBlendMode];

            renderer.spriteBatch.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);
        }

        // check if the webgl graphic needs to be updated
        if (this.glDirty) {
            this.dirty = true;
            this.glDirty = false;
        }

        WebGLGraphics.renderGraphics(this, renderer);

        // only render if it has children!
        if (this.children.length) {
            renderer.spriteBatch.start();

             // simple render children!
            for (var i = 0, j = this.children.length; i < j; ++i) {
                this.children[i].renderWebGL(renderer);
            }

            renderer.spriteBatch.stop();
        }

        if (this._filters) {
            renderer.filterManager.popFilter();
        }

        if (this._mask) {
            renderer.maskManager.popMask(this.mask, renderer);
        }

        renderer.drawCount++;

        renderer.spriteBatch.start();
    }
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer}
 * @private
 */
Graphics.prototype.renderCanvas = function (renderer) {
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if (!this.visible || this.alpha <= 0 || this.isMask === true) {
        return;
    }

    if (this._cacheAsBitmap) {
        if (this.dirty || this.cachedSpriteDirty) {
            this._generateCachedSprite();

            // we will also need to update the texture
            this.updateCachedSpriteTexture();

            this.cachedSpriteDirty = false;
            this.dirty = false;
        }

        this._cachedSprite.alpha = this.alpha;

        Sprite.prototype.renderCanvas.call(this._cachedSprite, renderer);

        return;
    }
    else {
        var context = renderer.context;
        var transform = this.worldTransform;

        if (this.blendMode !== renderer.currentBlendMode) {
            renderer.currentBlendMode = this.blendMode;
            context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
        }

        if (this._mask) {
            renderer.maskManager.pushMask(this._mask, renderer);
        }

        var resolution = renderer.resolution;
        context.setTransform(
            transform.a * resolution,
            transform.b * resolution,
            transform.c * resolution,
            transform.d * resolution,
            transform.tx * resolution,
            transform.ty * resolution
        );

        CanvasGraphics.renderGraphics(this, context);

        for (var i = 0, j = this.children.length; i < j; ++i) {
            this.children[i].renderCanvas(renderer);
        }

        if (this._mask) {
            renderer.maskManager.popMask(renderer);
        }
    }
};

/**
 * Retrieves the bounds of the graphic shape as a rectangle object
 *
 * @return {Rectangle} the rectangular bounding area
 */
Graphics.prototype.getBounds = function (matrix) {
    // return an empty object if the item is a mask!
    if (this.isMask) {
        return math.Rectangle.EMPTY;
    }

    if (this.dirty) {
        this.updateLocalBounds();

        this.glDirty = true;
        this.cachedSpriteDirty = true;
        this.dirty = false;
    }

    var bounds = this._localBounds;

    var w0 = bounds.x;
    var w1 = bounds.width + bounds.x;

    var h0 = bounds.y;
    var h1 = bounds.height + bounds.y;

    var worldTransform = matrix || this.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var x1 = a * w1 + c * h1 + tx;
    var y1 = d * h1 + b * w1 + ty;

    var x2 = a * w0 + c * h1 + tx;
    var y2 = d * h1 + b * w0 + ty;

    var x3 = a * w0 + c * h0 + tx;
    var y3 = d * h0 + b * w0 + ty;

    var x4 =  a * w1 + c * h0 + tx;
    var y4 =  d * h0 + b * w1 + ty;

    var maxX = x1;
    var maxY = y1;

    var minX = x1;
    var minY = y1;

    minX = x2 < minX ? x2 : minX;
    minX = x3 < minX ? x3 : minX;
    minX = x4 < minX ? x4 : minX;

    minY = y2 < minY ? y2 : minY;
    minY = y3 < minY ? y3 : minY;
    minY = y4 < minY ? y4 : minY;

    maxX = x2 > maxX ? x2 : maxX;
    maxX = x3 > maxX ? x3 : maxX;
    maxX = x4 > maxX ? x4 : maxX;

    maxY = y2 > maxY ? y2 : maxY;
    maxY = y3 > maxY ? y3 : maxY;
    maxY = y4 > maxY ? y4 : maxY;

    this._bounds.x = minX;
    this._bounds.width = maxX - minX;

    this._bounds.y = minY;
    this._bounds.height = maxY - minY;

    return this._bounds;
};

/**
 * Update the bounds of the object
 *
 */
Graphics.prototype.updateLocalBounds = function () {
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    if (this.graphicsData.length) {
        var shape, points, x, y, w, h;

        for (var i = 0; i < this.graphicsData.length; i++) {
            var data = this.graphicsData[i];
            var type = data.type;
            var lineWidth = data.lineWidth;
            shape = data.shape;

            if (type === CONST.SHAPES.RECT || type === CONST.SHAPES.RREC) {
                x = shape.x - lineWidth/2;
                y = shape.y - lineWidth/2;
                w = shape.width + lineWidth;
                h = shape.height + lineWidth;

                minX = x < minX ? x : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y < minY ? y : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else if (type === CONST.SHAPES.CIRC) {
                x = shape.x;
                y = shape.y;
                w = shape.radius + lineWidth/2;
                h = shape.radius + lineWidth/2;

                minX = x - w < minX ? x - w : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y - h < minY ? y - h : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else if (type === CONST.SHAPES.ELIP) {
                x = shape.x;
                y = shape.y;
                w = shape.width + lineWidth/2;
                h = shape.height + lineWidth/2;

                minX = x - w < minX ? x - w : minX;
                maxX = x + w > maxX ? x + w : maxX;

                minY = y - h < minY ? y - h : minY;
                maxY = y + h > maxY ? y + h : maxY;
            }
            else {
                // POLY
                points = shape.points;

                for (var j = 0; j < points.length; j += 2) {
                    x = points[j];
                    y = points[j+1];

                    minX = x-lineWidth < minX ? x-lineWidth : minX;
                    maxX = x+lineWidth > maxX ? x+lineWidth : maxX;

                    minY = y-lineWidth < minY ? y-lineWidth : minY;
                    maxY = y+lineWidth > maxY ? y+lineWidth : maxY;
                }
            }
        }
    }
    else {
        minX = 0;
        maxX = 0;
        minY = 0;
        maxY = 0;
    }

    var padding = this.boundsPadding;

    this._localBounds.x = minX - padding;
    this._localBounds.width = (maxX - minX) + padding * 2;

    this._localBounds.y = minY - padding;
    this._localBounds.height = (maxY - minY) + padding * 2;
};

/**
 * Generates the cached sprite when the sprite has cacheAsBitmap = true
 *
 * @private
 */
Graphics.prototype._generateCachedSprite = function () {
    var bounds = this.getLocalBounds();

    if (!this._cachedSprite) {
        var canvasBuffer = new CanvasBuffer(bounds.width, bounds.height);
        var texture = Texture.fromCanvas(canvasBuffer.canvas);

        this._cachedSprite = new Sprite(texture);
        this._cachedSprite.buffer = canvasBuffer;

        this._cachedSprite.worldTransform = this.worldTransform;
    }
    else {
        this._cachedSprite.buffer.resize(bounds.width, bounds.height);
    }

    // leverage the anchor to account for the offset of the element
    this._cachedSprite.anchor.x = -( bounds.x / bounds.width );
    this._cachedSprite.anchor.y = -( bounds.y / bounds.height );

    // this._cachedSprite.buffer.context.save();
    this._cachedSprite.buffer.context.translate(-bounds.x,-bounds.y);

    // make sure we set the alpha of the graphics to 1 for the render..
    this.worldAlpha = 1;

    // now render the graphic..
    CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context);

    this._cachedSprite.alpha = this.alpha;
};

/**
 * Updates texture size based on canvas size
 *
 * @private
 */
Graphics.prototype.updateCachedSpriteTexture = function () {
    var cachedSprite = this._cachedSprite;
    var texture = cachedSprite.texture;
    var canvas = cachedSprite.buffer.canvas;

    texture.baseTexture.width = canvas.width;
    texture.baseTexture.height = canvas.height;
    texture.crop.width = texture.frame.width = canvas.width;
    texture.crop.height = texture.frame.height = canvas.height;

    cachedSprite._width = canvas.width;
    cachedSprite._height = canvas.height;

    // update the dirty base textures
    texture.baseTexture.dirty();
};

/**
 * Destroys a previous cached sprite.
 *
 */
Graphics.prototype.destroyCachedSprite = function () {
    this._cachedSprite.texture.destroy(true);

    // let the gc collect the unused sprite
    // TODO could be object pooled!
    this._cachedSprite = null;
};

/**
 * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
 *
 * @param {Circle|Rectangle|Ellipse|Line|Polygon} shape The Shape object to draw.
 * @return {GraphicsData} The generated GraphicsData object.
 */
Graphics.prototype.drawShape = function (shape) {
    if (this.currentPath) {
        // check current path!
        if (this.currentPath.shape.points.length <= 2) {
            this.graphicsData.pop();
        }
    }

    this.currentPath = null;

    var data = new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, shape);

    this.graphicsData.push(data);

    if (data.type === CONST.SHAPES.POLY) {
        data.shape.closed = this.filling;
        this.currentPath = data;
    }

    this.dirty = true;

    return data;
};

},{"../const":4,"../display/DisplayObjectContainer":6,"../display/Sprite":7,"../math":12,"../renderers/canvas/utils/CanvasBuffer":21,"../renderers/canvas/utils/CanvasGraphics":22,"../renderers/webgl/utils/WebGLGraphics":39,"../textures/Texture":44,"./GraphicsData":19}],19:[function(require,module,exports){
/**
 * A GraphicsData object.
 *
 * @class
 * @namespace PIXI
 */
function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, shape) {
    this.lineWidth = lineWidth;
    this.lineColor = lineColor;
    this.lineAlpha = lineAlpha;
    this._lineTint = lineColor;

    this.fillColor = fillColor;
    this.fillAlpha = fillAlpha;
    this._fillTint = fillColor;
    this.fill = fill;

    this.shape = shape;
    this.type = shape.type;
}

GraphicsData.prototype.constructor = GraphicsData;
module.exports = GraphicsData;

/**
 * Creates a new GraphicsData object with the same values as this one.
 *
 * @return {GraphicsData}
 */
GraphicsData.prototype.clone = function () {
    return new GraphicsData(
        this.lineWidth,
        this.lineColor,
        this.lineAlpha,
        this.fillColor,
        this.fillAlpha,
        this.fill,
        this.shape
    );
};

},{}],20:[function(require,module,exports){
var CanvasMaskManager = require('./utils/CanvasMaskManager'),
    utils = require('../../utils'),
    CONST = require('../../const');

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.
 * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)
 *
 * @class
 * @namespace PIXI
 * @param [width=800] {number} the width of the canvas view
 * @param [height=600] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 * @param [options.clearBeforeRender=true] {boolean} This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
 */
function CanvasRenderer(width, height, options) {
    utils.sayHello('Canvas');

    if (options) {
        for (var i in CONST.defaultRenderOptions) {
            if (typeof options[i] === 'undefined') {
                options[i] = CONST.defaultRenderOptions[i];
            }
        }
    }
    else {
        options = CONST.defaultRenderOptions;
    }

    /**
     * The renderer type.
     *
     * @member {number}
     */
    this.type = CONST.CANVAS_RENDERER;

    /**
     * The resolution of the canvas.
     *
     * @member {number}
     */
    this.resolution = options.resolution;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the scene is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.
     * If the scene is transparent Pixi will use clearRect to clear the canvas every frame.
     * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    this.clearBeforeRender = options.clearBeforeRender;

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    this._backgroundColor = 0x000000;

    /**
     * The background color as a string.
     *
     * @member {string}
     * @private
     */
    this._backgroundColorString = '#000000';

    this.backgroundColor = options.backgroundColor || this._backgroundColor; // run bg color setter

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    this.transparent = options.transparent;

    /**
     * Whether the render view should be resized automatically
     *
     * @member {boolean}
     */
    this.autoResize = options.autoResize || false;


    /**
     * The width of the canvas view
     *
     * @member {number}
     * @default 800
     */
    this.width = width || 800;

    /**
     * The height of the canvas view
     *
     * @member {number}
     * @default 600
     */
    this.height = height || 600;

    this.width *= this.resolution;
    this.height *= this.resolution;

    /**
     * The canvas element that everything is drawn to.
     *
     * @member {HTMLCanvasElement}
     */
    this.view = options.view || document.createElement('canvas');

    /**
     * The canvas 2d context that everything is drawn with
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.view.getContext('2d', { alpha: this.transparent });

    /**
     * Boolean flag controlling canvas refresh.
     *
     * @member {boolean}
     */
    this.refresh = true;

    this.view.width = this.width * this.resolution;
    this.view.height = this.height * this.resolution;

    /**
     * Internal var.
     *
     * @member {number}
     */
    this.count = 0;

    /**
     * Instance of a CanvasMaskManager, handles masking when using the canvas renderer
     * @member {CanvasMaskManager}
     */
    this.maskManager = new CanvasMaskManager();

    /**
     * If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     * @member {boolean}
     */
    this.roundPixels = false;

    this.scaleMode = null;

    this.smoothProperty = null;

    if (this.context.imageSmoothingEnabled) {
        this.smoothProperty = 'imageSmoothingEnabled';
    }
    else if (this.context.webkitImageSmoothingEnabled) {
        this.smoothProperty = 'webkitImageSmoothingEnabled';
    }
    else if (this.context.mozImageSmoothingEnabled) {
        this.smoothProperty = 'mozImageSmoothingEnabled';
    }
    else if (this.context.oImageSmoothingEnabled) {
        this.smoothProperty = 'oImageSmoothingEnabled';
    }
    else if (this.context.msImageSmoothingEnabled) {
        this.smoothProperty = 'msImageSmoothingEnabled';
    }

    this.currentBlendMode = CONST.blendModes.NORMAL;

    this.blendModes = null;

    this._mapBlendModes();

    this.resize(width, height);
}

// constructor
CanvasRenderer.prototype.constructor = CanvasRenderer;
module.exports = CanvasRenderer;

Object.defineProperties(CanvasRenderer.prototype, {
    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     * @memberof CanvasRenderer#
     */
    backgroundColor: {
        get: function () {
            return this._backgroundColor;
        },
        set: function (val) {
            this._backgroundColor = val;
            this._backgroundColorString = utils.hex2string(val);
        }
    }
});

/**
 * Renders the object to this canvas view
 *
 * @param object {DisplayObject} the object to be rendered
 */
CanvasRenderer.prototype.render = function (object) {
    object.updateTransform();

    this.context.setTransform(1,0,0,1,0,0);

    this.context.globalAlpha = 1;

    this.currentBlendMode = CONST.blendModes.NORMAL;
    this.context.globalCompositeOperation = this.blendModes[CONST.blendModes.NORMAL];

    if (navigator.isCocoonJS && this.view.screencanvas) {
        this.context.fillStyle = 'black';
        this.context.clear();
    }

    if (this.clearBeforeRender) {
        if (this.transparent) {
            this.context.clearRect(0, 0, this.width, this.height);
        }
        else {
            this.context.fillStyle = this._backgroundColorString;
            this.context.fillRect(0, 0, this.width , this.height);
        }
    }

    this.renderDisplayObject(object);
};

/**
 * Removes everything from the renderer and optionally removes the Canvas DOM element.
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
CanvasRenderer.prototype.destroy = function (removeView) {
    if (removeView && this.view.parent) {
        this.view.parent.removeChild(this.view);
    }

    this.view = null;
    this.context = null;
    this.maskManager = null;
};

/**
 * Resizes the canvas view to the specified width and height
 *
 * @param width {number} the new width of the canvas view
 * @param height {number} the new height of the canvas view
 */
CanvasRenderer.prototype.resize = function (width, height) {
    this.width = width * this.resolution;
    this.height = height * this.resolution;

    this.view.width = this.width;
    this.view.height = this.height;

    if (this.autoResize) {
        this.view.style.width = this.width / this.resolution + 'px';
        this.view.style.height = this.height / this.resolution + 'px';
    }
};

/**
 * Renders a display object
 *
 * @param displayObject {DisplayObject} The displayObject to render
 * @private
 */
CanvasRenderer.prototype.renderDisplayObject = function (displayObject) {
    displayObject.renderCanvas(this);
};

/**
 * Maps Pixi blend modes to canvas blend modes.
 *
 * @private
 */
CanvasRenderer.prototype._mapBlendModes = function () {
    if (!this.blendModes) {
        this.blendModes = {};

        if (utils.canUseNewCanvasBlendModes()) {
            this.blendModes[CONST.blendModes.NORMAL]        = 'source-over';
            this.blendModes[CONST.blendModes.ADD]           = 'lighter'; //IS THIS OK???
            this.blendModes[CONST.blendModes.MULTIPLY]      = 'multiply';
            this.blendModes[CONST.blendModes.SCREEN]        = 'screen';
            this.blendModes[CONST.blendModes.OVERLAY]       = 'overlay';
            this.blendModes[CONST.blendModes.DARKEN]        = 'darken';
            this.blendModes[CONST.blendModes.LIGHTEN]       = 'lighten';
            this.blendModes[CONST.blendModes.COLOR_DODGE]   = 'color-dodge';
            this.blendModes[CONST.blendModes.COLOR_BURN]    = 'color-burn';
            this.blendModes[CONST.blendModes.HARD_LIGHT]    = 'hard-light';
            this.blendModes[CONST.blendModes.SOFT_LIGHT]    = 'soft-light';
            this.blendModes[CONST.blendModes.DIFFERENCE]    = 'difference';
            this.blendModes[CONST.blendModes.EXCLUSION]     = 'exclusion';
            this.blendModes[CONST.blendModes.HUE]           = 'hue';
            this.blendModes[CONST.blendModes.SATURATION]    = 'saturation';
            this.blendModes[CONST.blendModes.COLOR]         = 'color';
            this.blendModes[CONST.blendModes.LUMINOSITY]    = 'luminosity';
        }
        else {
            // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
            this.blendModes[CONST.blendModes.NORMAL]        = 'source-over';
            this.blendModes[CONST.blendModes.ADD]           = 'lighter'; //IS THIS OK???
            this.blendModes[CONST.blendModes.MULTIPLY]      = 'source-over';
            this.blendModes[CONST.blendModes.SCREEN]        = 'source-over';
            this.blendModes[CONST.blendModes.OVERLAY]       = 'source-over';
            this.blendModes[CONST.blendModes.DARKEN]        = 'source-over';
            this.blendModes[CONST.blendModes.LIGHTEN]       = 'source-over';
            this.blendModes[CONST.blendModes.COLOR_DODGE]   = 'source-over';
            this.blendModes[CONST.blendModes.COLOR_BURN]    = 'source-over';
            this.blendModes[CONST.blendModes.HARD_LIGHT]    = 'source-over';
            this.blendModes[CONST.blendModes.SOFT_LIGHT]    = 'source-over';
            this.blendModes[CONST.blendModes.DIFFERENCE]    = 'source-over';
            this.blendModes[CONST.blendModes.EXCLUSION]     = 'source-over';
            this.blendModes[CONST.blendModes.HUE]           = 'source-over';
            this.blendModes[CONST.blendModes.SATURATION]    = 'source-over';
            this.blendModes[CONST.blendModes.COLOR]         = 'source-over';
            this.blendModes[CONST.blendModes.LUMINOSITY]    = 'source-over';
        }
    }
};

},{"../../const":4,"../../utils":50,"./utils/CanvasMaskManager":23}],21:[function(require,module,exports){
/**
 * Creates a Canvas element of the given size.
 *
 * @class
 * @namespace PIXI
 * @param width {number} the width for the newly created canvas
 * @param height {number} the height for the newly created canvas
 */
function CanvasBuffer(width, height) {
    /**
     * The Canvas object that belongs to this CanvasBuffer.
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');

    this.canvas.width = width;
    this.canvas.height = height;
}

CanvasBuffer.prototype.constructor = CanvasBuffer;
module.exports = CanvasBuffer;

Object.defineProperties(CanvasBuffer.prototype, {
    /**
     * The width of the canvas buffer in pixels.
     *
     * @member {number}
     * @memberof CanvasBuffer#
     */
    width: {
        get: function () {
            return this.canvas.width;
        },
        set: function (val) {
            this.canvas.width = val;
        }
    },
    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     * @memberof CanvasBuffer#
     */
    height: {
        get: function () {
            return this.canvas.height;
        },
        set: function (val) {
            this.canvas.height = val;
        }
    }
});

/**
 * Clears the canvas that was created by the CanvasBuffer class.
 *
 * @private
 */
CanvasBuffer.prototype.clear = function () {
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
};

/**
 * Resizes the canvas to the specified width and height.
 *
 * @param width {number} the new width of the canvas
 * @param height {number} the new height of the canvas
 */
CanvasBuffer.prototype.resize = function (width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
};

},{}],22:[function(require,module,exports){
var CONST = require('../../../const');

/**
 * A set of functions used by the canvas renderer to draw the primitive graphics data.
 *
 * @namespace PIXI
 */
var CanvasGraphics = module.exports = {};

/*
 * Renders a Graphics object to a canvas.
 *
 * @param graphics {Graphics} the actual graphics object to render
 * @param context {CanvasRenderingContext2D} the 2d drawing method of the canvas
 */
CanvasGraphics.renderGraphics = function (graphics, context) {
    var worldAlpha = graphics.worldAlpha;

    if (graphics.dirty) {
        this.updateGraphicsTint(graphics);
        graphics.dirty = false;
    }

    for (var i = 0; i < graphics.graphicsData.length; i++) {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        var fillColor = data._fillTint;
        var lineColor = data._lineTint;

        context.lineWidth = data.lineWidth;

        if (data.type === CONST.SHAPES.POLY) {
            context.beginPath();

            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++) {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            if (shape.closed) {
                context.lineTo(points[0], points[1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length-2] && points[1] === points[points.length-1]) {
                context.closePath();
            }

            if (data.fill) {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth) {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.RECT) {

            if (data.fillColor || data.fillColor === 0) {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fillRect(shape.x, shape.y, shape.width, shape.height);

            }
            if (data.lineWidth) {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.strokeRect(shape.x, shape.y, shape.width, shape.height);
            }
        }
        else if (data.type === CONST.SHAPES.CIRC) {
            // TODO - need to be Undefined!
            context.beginPath();
            context.arc(shape.x, shape.y, shape.radius,0,2*Math.PI);
            context.closePath();

            if (data.fill) {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth) {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.ELIP) {
            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - w/2;
            var y = shape.y - h/2;

            context.beginPath();

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

            context.closePath();

            if (data.fill) {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();
            }
            if (data.lineWidth) {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
        else if (data.type === CONST.SHAPES.RREC) {
            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.beginPath();
            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();

            if (data.fillColor || data.fillColor === 0) {
                context.globalAlpha = data.fillAlpha * worldAlpha;
                context.fillStyle = '#' + ('00000' + ( fillColor | 0).toString(16)).substr(-6);
                context.fill();

            }
            if (data.lineWidth) {
                context.globalAlpha = data.lineAlpha * worldAlpha;
                context.strokeStyle = '#' + ('00000' + ( lineColor | 0).toString(16)).substr(-6);
                context.stroke();
            }
        }
    }
};

/*
 * Renders a graphics mask
 *
 * @private
 * @param graphics {Graphics} the graphics which will be used as a mask
 * @param context {CanvasRenderingContext2D} the context 2d method of the canvas
 */
CanvasGraphics.renderGraphicsMask = function (graphics, context) {
    var len = graphics.graphicsData.length;

    if (len === 0) {
        return;
    }

    context.beginPath();

    for (var i = 0; i < len; i++) {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        if (data.type === CONST.SHAPES.POLY) {

            var points = shape.points;

            context.moveTo(points[0], points[1]);

            for (var j=1; j < points.length/2; j++) {
                context.lineTo(points[j * 2], points[j * 2 + 1]);
            }

            // if the first and last point are the same close the path - much neater :)
            if (points[0] === points[points.length-2] && points[1] === points[points.length-1]) {
                context.closePath();
            }

        }
        else if (data.type === CONST.SHAPES.RECT) {
            context.rect(shape.x, shape.y, shape.width, shape.height);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.CIRC) {
            // TODO - need to be Undefined!
            context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.ELIP) {

            // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

            var w = shape.width * 2;
            var h = shape.height * 2;

            var x = shape.x - w/2;
            var y = shape.y - h/2;

            var kappa = 0.5522848,
                ox = (w / 2) * kappa, // control point offset horizontal
                oy = (h / 2) * kappa, // control point offset vertical
                xe = x + w,           // x-end
                ye = y + h,           // y-end
                xm = x + w / 2,       // x-middle
                ym = y + h / 2;       // y-middle

            context.moveTo(x, ym);
            context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
            context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
            context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
            context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
            context.closePath();
        }
        else if (data.type === CONST.SHAPES.RREC) {

            var rx = shape.x;
            var ry = shape.y;
            var width = shape.width;
            var height = shape.height;
            var radius = shape.radius;

            var maxRadius = Math.min(width, height) / 2 | 0;
            radius = radius > maxRadius ? maxRadius : radius;

            context.moveTo(rx, ry + radius);
            context.lineTo(rx, ry + height - radius);
            context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
            context.lineTo(rx + width - radius, ry + height);
            context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
            context.lineTo(rx + width, ry + radius);
            context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
            context.lineTo(rx + radius, ry);
            context.quadraticCurveTo(rx, ry, rx, ry + radius);
            context.closePath();
        }
    }
};

CanvasGraphics.updateGraphicsTint = function (graphics) {
    if (graphics.tint === 0xFFFFFF) {
        return;
    }

    var tintR = (graphics.tint >> 16 & 0xFF) / 255;
    var tintG = (graphics.tint >> 8 & 0xFF) / 255;
    var tintB = (graphics.tint & 0xFF)/ 255;

    for (var i = 0; i < graphics.graphicsData.length; i++) {
        var data = graphics.graphicsData[i];

        var fillColor = data.fillColor | 0;
        var lineColor = data.lineColor | 0;

        /*
        var colorR = (fillColor >> 16 & 0xFF) / 255;
        var colorG = (fillColor >> 8 & 0xFF) / 255;
        var colorB = (fillColor & 0xFF) / 255;

        colorR *= tintR;
        colorG *= tintG;
        colorB *= tintB;

        fillColor = ((colorR*255 << 16) + (colorG*255 << 8) + colorB*255);

        colorR = (lineColor >> 16 & 0xFF) / 255;
        colorG = (lineColor >> 8 & 0xFF) / 255;
        colorB = (lineColor & 0xFF) / 255;

        colorR *= tintR;
        colorG *= tintG;
        colorB *= tintB;

        lineColor = ((colorR*255 << 16) + (colorG*255 << 8) + colorB*255);
        */

        // super inline cos im an optimization NAZI :)
        data._fillTint = (((fillColor >> 16 & 0xFF) / 255 * tintR*255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG*255 << 8) +  (fillColor & 0xFF) / 255 * tintB*255);
        data._lineTint = (((lineColor >> 16 & 0xFF) / 255 * tintR*255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG*255 << 8) +  (lineColor & 0xFF) / 255 * tintB*255);

    }
};


},{"../../../const":4}],23:[function(require,module,exports){
var CanvasGraphics = require('./CanvasGraphics');

/**
 * A set of functions used to handle masking.
 *
 * @class
 * @namespace PIXI
 */
function CanvasMaskManager() {}

CanvasMaskManager.prototype.constructor = CanvasMaskManager;
module.exports = CanvasMaskManager;

/**
 * This method adds it to the current stack of masks.
 *
 * @param maskData {object} the maskData that will be pushed
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer context to use.
 */
CanvasMaskManager.prototype.pushMask = function (maskData, renderer) {
    renderer.context.save();

    var cacheAlpha = maskData.alpha;
    var transform = maskData.worldTransform;
    var resolution = renderer.resolution;

    renderer.context.setTransform(
        transform.a * resolution,
        transform.b * resolution,
        transform.c * resolution,
        transform.d * resolution,
        transform.tx * resolution,
        transform.ty * resolution
    );

    CanvasGraphics.renderGraphicsMask(maskData, renderer.context);

    renderer.context.clip();

    maskData.worldAlpha = cacheAlpha;
};

/**
 * Restores the current drawing context to the state it was before the mask was applied.
 *
 * @param renderer {WebGLRenderer|CanvasRenderer} The renderer context to use.
 */
CanvasMaskManager.prototype.popMask = function (renderer) {
    renderer.context.restore();
};

},{"./CanvasGraphics":22}],24:[function(require,module,exports){
var utils = require('../../../utils');

/**
 * Utility methods for Sprite/Texture tinting.
 *
 * @namespace PIXI
 */
var CanvasTinter = module.exports = {};

/**
 * Basically this method just needs a sprite and a color and tints the sprite with the given color.
 *
 * @param sprite {Sprite} the sprite to tint
 * @param color {number} the color to use to tint the sprite with
 * @return {HTMLCanvasElement} The tinted canvas
 */
CanvasTinter.getTintedTexture = function (sprite, color) {
    var texture = sprite.texture;

    color = CanvasTinter.roundColor(color);

    var stringColor = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);

    texture.tintCache = texture.tintCache || {};

    if (texture.tintCache[stringColor]) {
        return texture.tintCache[stringColor];
    }

     // clone texture..
    var canvas = CanvasTinter.canvas || document.createElement('canvas');

    //CanvasTinter.tintWithPerPixel(texture, stringColor, canvas);
    CanvasTinter.tintMethod(texture, color, canvas);

    if (CanvasTinter.convertTintToImage) {
        // is this better?
        var tintImage = new Image();
        tintImage.src = canvas.toDataURL();

        texture.tintCache[stringColor] = tintImage;
    }
    else {
        texture.tintCache[stringColor] = canvas;
        // if we are not converting the texture to an image then we need to lose the reference to the canvas
        CanvasTinter.canvas = null;
    }

    return canvas;
};

/**
 * Tint a texture using the 'multiply' operation.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithMultiply = function (texture, color, canvas) {
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.fillStyle = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);

    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'multiply';

    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    context.globalCompositeOperation = 'destination-atop';

    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );
};

/**
 * Tint a texture using the 'overlay' operation.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithOverlay = function (texture, color, canvas) {
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.globalCompositeOperation = 'copy';
    context.fillStyle = '#' + ('00000' + ( color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'destination-atop';
    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    // context.globalCompositeOperation = 'copy';
};

/**
 * Tint a texture pixel per pixel.
 *
 * @param texture {Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */
CanvasTinter.tintWithPerPixel = function (texture, color, canvas) {
    var context = canvas.getContext( '2d' );

    var crop = texture.crop;

    canvas.width = crop.width;
    canvas.height = crop.height;

    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.source,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );

    var rgbValues = utils.hex2rgb(color);
    var r = rgbValues[0], g = rgbValues[1], b = rgbValues[2];

    var pixelData = context.getImageData(0, 0, crop.width, crop.height);

    var pixels = pixelData.data;

    for (var i = 0; i < pixels.length; i += 4) {
        pixels[i+0] *= r;
        pixels[i+1] *= g;
        pixels[i+2] *= b;
    }

    context.putImageData(pixelData, 0, 0);
};

/**
 * Rounds the specified color according to the CanvasTinter.cacheStepsPerColorChannel.
 *
 * @param color {number} the color to round, should be a hex color
 */
CanvasTinter.roundColor = function (color) {
    var step = CanvasTinter.cacheStepsPerColorChannel;

    var rgbValues = utils.hex2rgb(color);

    rgbValues[0] = Math.min(255, (rgbValues[0] / step) * step);
    rgbValues[1] = Math.min(255, (rgbValues[1] / step) * step);
    rgbValues[2] = Math.min(255, (rgbValues[2] / step) * step);

    return utils.rgb2hex(rgbValues);
};

/**
 * Number of steps which will be used as a cap when rounding colors.
 *
 * @member
 */
CanvasTinter.cacheStepsPerColorChannel = 8;

/**
 * Tint cache boolean flag.
 *
 * @member
 */
CanvasTinter.convertTintToImage = false;

/**
 * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
 *
 * @member
 */
CanvasTinter.canUseMultiply = utils.canUseNewCanvasBlendModes();

/**
 * The tinting method that will be used.
 *
 */
CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply :  CanvasTinter.tintWithPerPixel;

},{"../../../utils":50}],25:[function(require,module,exports){
var WebGLSpriteBatch = require('./utils/WebGLSpriteBatch'),
    WebGLFastSpriteBatch = require('./utils/WebGLFastSpriteBatch'),
    WebGLShaderManager = require('./managers/WebGLShaderManager'),
    WebGLMaskManager = require('./managers/WebGLMaskManager'),
    WebGLFilterManager = require('./managers/WebGLFilterManager'),
    WebGLStencilManager = require('./managers/WebGLStencilManager'),
    WebGLBlendModeManager = require('./managers/WebGLBlendModeManager'),
    math = require('../../math'),
    utils = require('../../utils'),
    CONST = require('../../const');

/**
 * The WebGLRenderer draws the scene and all its content onto a webGL enabled canvas. This renderer
 * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
 * So no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything :)
 *
 * @class
 * @namespace PIXI
 * @param [width=0] {number} the width of the canvas view
 * @param [height=0] {number} the height of the canvas view
 * @param [options] {object} The optional renderer parameters
 * @param [options.view] {HTMLCanvasElement} the canvas to use as a view, optional
 * @param [options.transparent=false] {boolean} If the render view is transparent, default false
 * @param [options.autoResize=false] {boolean} If the render view is automatically resized, default false
 * @param [options.antialias=false] {boolean} sets antialias (only applicable in chrome at the moment)
 * @param [options.preserveDrawingBuffer=false] {boolean} enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context
 * @param [options.resolution=1] {number} the resolution of the renderer retina would be 2
 */
function WebGLRenderer(width, height, options) {
    utils.sayHello('webGL');

    if (options) {
        for (var i in CONST.defaultRenderOptions) {
            if (typeof options[i] === 'undefined') {
                options[i] = CONST.defaultRenderOptions[i];
            }
        }
    }
    else {
        options = CONST.defaultRenderOptions;
    }

    this.uuid = utils.uuid();

    /**
     * @member {number}
     */
    this.type = CONST.WEBGL_RENDERER;

    /**
     * The resolution of the renderer
     *
     * @member {number}
     * @default 1
     */
    this.resolution = options.resolution;

    // do a catch.. only 1 webGL renderer..

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    this.transparent = options.transparent;

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    this._backgroundColor = 0x000000;

    /**
     * The background color as an [R, G, B] array.
     *
     * @member {number[]}
     * @private
     */
    this._backgroundColorRgb = [0, 0, 0];

    this.backgroundColor = options.backgroundColor || this._backgroundColor; // run bg color setter

    /**
     * Whether the render view should be resized automatically
     *
     * @member {boolean}
     */
    this.autoResize = options.autoResize || false;

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.
     *
     * @member {boolean}
     */
    this.preserveDrawingBuffer = options.preserveDrawingBuffer;

    /**
     * This sets if the WebGLRenderer will clear the context texture or not before the new render pass. If true:
     * If the renderer is NOT transparent, Pixi will clear to alpha (0, 0, 0, 0).
     * If the renderer is transparent, Pixi will clear to the target Stage's background color.
     * Disable this by setting this to false. For example: if your game has a canvas filling background image, you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    this.clearBeforeRender = options.clearBeforeRender;

    /**
     * The width of the canvas view
     *
     * @member {number}
     * @default 800
     */
    this.width = width || 800;

    /**
     * The height of the canvas view
     *
     * @member {number}
     * @default 600
     */
    this.height = height || 600;

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    this.view = options.view || document.createElement( 'canvas' );

    // deal with losing context..

    /**
     * @member {Function}
     */
    this.contextLostBound = this.handleContextLost.bind(this);

    /**
     * @member {Function}
     */
    this.contextRestoredBound = this.handleContextRestored.bind(this);

    this.view.addEventListener('webglcontextlost', this.contextLostBound, false);
    this.view.addEventListener('webglcontextrestored', this.contextRestoredBound, false);

    /**
     * @member {object}
     * @private
     */
    this._contextOptions = {
        alpha: this.transparent,
        antialias: options.antialias, // SPEED UP??
        premultipliedAlpha:this.transparent && this.transparent !== 'notMultiplied',
        stencil:true,
        preserveDrawingBuffer: options.preserveDrawingBuffer
    };

    /**
     * @member {Point}
     */
    this.projection = new math.Point();

    /**
     * @member {Point}
     */
    this.offset = new math.Point(0, 0);

    /**
     * Counter for the number of draws made each frame
     *
     * @member {number}
     */
    this.drawCount = 0;

    // time to create the render managers! each one focuses on managing a state in webGL

    /**
     * Deals with managing the shader programs and their attribs
     * @member {WebGLShaderManager}
     */
    this.shaderManager = new WebGLShaderManager(this);

    /**
     * Manages the rendering of sprites
     * @member {WebGLSpriteBatch}
     */
    this.spriteBatch = new WebGLSpriteBatch(this);

    /**
     * Manages the rendering of sprites
     * @member {WebGLFastSpriteBatch}
     */
    this.fastSpriteBatch = new WebGLFastSpriteBatch(this);

    /**
     * Manages the masks using the stencil buffer
     * @member {WebGLMaskManager}
     */
    this.maskManager = new WebGLMaskManager(this);

    /**
     * Manages the filters
     * @member {WebGLFilterManager}
     */
    this.filterManager = new WebGLFilterManager(this);

    /**
     * Manages the stencil buffer
     * @member {WebGLStencilManager}
     */
    this.stencilManager = new WebGLStencilManager(this);

    /**
     * Manages the blendModes
     * @member {WebGLBlendModeManager}
     */
    this.blendModeManager = new WebGLBlendModeManager(this);

    this.blendModes = null;

    this._boundUpdateTexture = this.updateTexture.bind(this);
    this._boundDestroyTexture = this.destroyTexture.bind(this);

    // time init the context..
    this._initContext();

    // map some webGL blend modes..
    this._mapBlendModes();
}

// constructor
WebGLRenderer.prototype.constructor = WebGLRenderer;
module.exports = WebGLRenderer;

utils.eventTarget.mixin(WebGLRenderer.prototype);

Object.defineProperties(WebGLRenderer.prototype, {
    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     * @memberof WebGLRenderer#
     */
    backgroundColor: {
        get: function () {
            return this._backgroundColor;
        },
        set: function (val) {
            this._backgroundColor = val;
            utils.hex2rgb(val, this._backgroundColorRgb);
        }
    }
});

/**
 *
 * @private
 */
WebGLRenderer.prototype._initContext = function () {
    var gl = this.view.getContext('webgl', this._contextOptions) || this.view.getContext('experimental-webgl', this._contextOptions);
    this.gl = gl;

    if (!gl) {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    this.glContextId = WebGLRenderer.glContextId++;
    gl.id = this.glContextId;
    gl.renderer = this;

    // set up the default pixi settings..
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.enable(gl.BLEND);

    this.emit('context', gl);

    // now resize and we are good to go!
    this.resize(this.width, this.height);
};

/**
 * Renders the object to its webGL view
 *
 * @param object {DisplayObject} the object to be rendered
 */
WebGLRenderer.prototype.render = function (object) {
    // no point rendering if our context has been blown up!
    if (this.gl.isContextLost()) {
        return;
    }

    // update the scene graph
    object.updateTransform();

    var gl = this.gl;

    // -- Does this need to be set every frame? -- //
    gl.viewport(0, 0, this.width, this.height);

    // make sure we are bound to the main frame buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    if (this.clearBeforeRender) {
        if (this.transparent) {
            gl.clearColor(0, 0, 0, 0);
        }
        else {
            gl.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1);
        }

        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    this.renderDisplayObject(object, this.projection);
};

/**
 * Renders a Display Object.
 *
 * @param displayObject {DisplayObject} The DisplayObject to render
 * @param projection {Point} The projection
 * @param buffer {Array} a standard WebGL buffer
 */
WebGLRenderer.prototype.renderDisplayObject = function (displayObject, projection, buffer) {
    this.blendModeManager.setBlendMode(CONST.blendModes.NORMAL);

    // reset the render session data..
    this.drawCount = 0;

    // make sure to flip the Y if using a render texture..
    this.flipY = buffer ? -1 : 1;

    // set the default projection
    this.projection = projection;

    //set the default offset
    this.offset = this.offset;

    // start the sprite batch
    this.spriteBatch.begin();

    // start the filter manager
    this.filterManager.begin(buffer);

    // render the scene!
    displayObject.renderWebGL(this);

    // finish the sprite batch
    this.spriteBatch.end();
};

/**
 * Resizes the webGL view to the specified width and height.
 *
 * @param width {number} the new width of the webGL view
 * @param height {number} the new height of the webGL view
 */
WebGLRenderer.prototype.resize = function (width, height) {
    this.width = width * this.resolution;
    this.height = height * this.resolution;

    this.view.width = this.width;
    this.view.height = this.height;

    if (this.autoResize) {
        this.view.style.width = this.width / this.resolution + 'px';
        this.view.style.height = this.height / this.resolution + 'px';
    }

    this.gl.viewport(0, 0, this.width, this.height);

    this.projection.x =  this.width / 2 / this.resolution;
    this.projection.y =  -this.height / 2 / this.resolution;
};

/**
 * Updates and/or Creates a WebGL texture for the renderer's context.
 *
 * @param texture {BaseTexture|Texture} the texture to update
 */
WebGLRenderer.prototype.updateTexture = function (texture) {
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded) {
        return;
    }

    var gl = this.gl;

    if (!texture._glTextures[gl.id]) {
        texture._glTextures[gl.id] = gl.createTexture();
        texture.on('update', this._boundUpdateTexture);
        texture.on('dispose', this._boundDestroyTexture);
    }

    gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);

    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);


    if (texture.mipmap && utils.isPowerOfTwo(texture.width, texture.height)) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);
    }
    else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
    }

    if (!texture._powerOf2) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    }

    return  texture._glTextures[gl.id];
};

WebGLRenderer.prototype.destroyTexture = function (texture) {
    texture = texture.baseTexture || texture;

    if (!texture.hasLoaded) {
        return;
    }

    if (texture._glTextures[this.gl.id]) {
        this.gl.deleteTexture(texture._glTextures[this.gl.id]);
    }
};

/**
 * Handles a lost webgl context
 *
 * @param event {Event}
 * @private
 */
WebGLRenderer.prototype.handleContextLost = function (event) {
    event.preventDefault();
};

/**
 * Handles a restored webgl context
 *
 * @param event {Event}
 * @private
 */
WebGLRenderer.prototype.handleContextRestored = function () {
    this._initContext();

    // empty all the ol gl textures as they are useless now
    for (var key in utils.TextureCache) {
        var texture = utils.TextureCache[key].baseTexture;
        texture._glTextures = [];
    }
};

/**
 * Removes everything from the renderer (event listeners, spritebatch, etc...)
 *
 * @param [removeView=false] {boolean} Removes the Canvas element from the DOM.
 */
WebGLRenderer.prototype.destroy = function (removeView) {
    if (removeView && this.view.parent) {
        this.view.parent.removeChild(this.view);
    }

    // remove listeners
    this.view.removeEventListener('webglcontextlost', this.contextLostBound);
    this.view.removeEventListener('webglcontextrestored', this.contextRestoredBound);

    // time to create the render managers! each one focuses on managine a state in webGL
    this.shaderManager.destroy();
    this.spriteBatch.destroy();
    this.maskManager.destroy();
    this.filterManager.destroy();


    // this.uuid = utils.uuid();
    // this.type = CONST.WEBGL_RENDERER;

    // this.resolution = options.resolution;
    // this.transparent = options.transparent;

    this._backgroundColor = 0x000000;
    this._backgroundColorRgb = null;

    // this.backgroundColor = null;
    // this.autoResize = options.autoResize || false;
    // this.preserveDrawingBuffer = options.preserveDrawingBuffer;
    // this.clearBeforeRender = options.clearBeforeRender;
    // this.width = width || 800;
    // this.height = height || 600;

    this.view = null;

    this.contextLostBound = null;
    this.contextRestoredBound = null;

    this._contextOptions = null;

    this.projection = null;
    this.offset = null;
    this.drawCount = 0;

    this.shaderManager = null;
    this.spriteBatch = null;
    this.maskManager = null;
    this.filterManager = null;
    this.stencilManager = null;
    this.blendModeManager = null;

    this.blendModes = null;

    this.gl = null;
    this.blendModes = null;
};

/**
 * Maps Pixi blend modes to WebGL blend modes.
 *
 * @private
 */
WebGLRenderer.prototype._mapBlendModes = function () {
    var gl = this.gl;

    if (!this.blendModes) {
        this.blendModes = {};

        this.blendModes[CONST.blendModes.NORMAL]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.ADD]           = [gl.SRC_ALPHA, gl.DST_ALPHA];
        this.blendModes[CONST.blendModes.MULTIPLY]      = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.SCREEN]        = [gl.SRC_ALPHA, gl.ONE];
        this.blendModes[CONST.blendModes.OVERLAY]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.DARKEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.LIGHTEN]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.COLOR_DODGE]   = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.COLOR_BURN]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.HARD_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.SOFT_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.DIFFERENCE]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.EXCLUSION]     = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.HUE]           = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.SATURATION]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.COLOR]         = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
        this.blendModes[CONST.blendModes.LUMINOSITY]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];
    }
};

WebGLRenderer.glContextId = 0;

},{"../../const":4,"../../math":12,"../../utils":50,"./managers/WebGLBlendModeManager":26,"./managers/WebGLFilterManager":27,"./managers/WebGLMaskManager":29,"./managers/WebGLShaderManager":30,"./managers/WebGLStencilManager":31,"./utils/WebGLFastSpriteBatch":38,"./utils/WebGLSpriteBatch":41}],26:[function(require,module,exports){
var WebGLManager = require('./WebGLManager');

/**
 * @class
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLBlendModeManager(renderer) {
    WebGLManager.call(this, renderer);

    /**
     * @member {number}
     */
    this.currentBlendMode = 99999;
}

WebGLBlendModeManager.prototype = Object.create(WebGLManager.prototype);
WebGLBlendModeManager.prototype.constructor = WebGLBlendModeManager;
module.exports = WebGLBlendModeManager;

/**
 * Sets-up the given blendMode from WebGL's point of view.
 *
 * @param blendMode {number} the blendMode, should be a Pixi const, such as BlendModes.ADD
 */
WebGLBlendModeManager.prototype.setBlendMode = function (blendMode) {
    if (this.currentBlendMode === blendMode) {
        return false;
    }

    this.currentBlendMode = blendMode;

    var mode = this.renderer.blendModes[this.currentBlendMode];
    this.renderer.gl.blendFunc(mode[0], mode[1]);

    return true;
};

},{"./WebGLManager":28}],27:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    FilterTexture = require('../utils/FilterTexture'),
    Shader = require('../shaders/Shader');

/**
 * @class
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLFilterManager(renderer) {
    WebGLManager.call(this, renderer);

    /**
     * @member {any[]}
     */
    this.filterStack = [];

    /**
     * @member {any[]]}
     */
    this.texturePool = [];

    /**
     * @member {number}
     */
    this.offsetX = 0;

    /**
     * @member {number}
     */
    this.offsetY = 0;

    // listen for context and update necessary buffers
    var self = this;
    this.renderer.on('context', function () {
        self.texturePool.length = 0;
        self.initShaderBuffers();
    });
}

WebGLFilterManager.prototype = Object.create(WebGLManager.prototype);
WebGLFilterManager.prototype.constructor = WebGLFilterManager;
module.exports = WebGLFilterManager;

/**
 * @param renderer {WebGLRenderer}
 * @param buffer {ArrayBuffer}
 */
WebGLFilterManager.prototype.begin = function (buffer) {
    this.defaultShader = this.renderer.shaderManager.defaultShader;

    this.width = this.renderer.projection.x * 2;
    this.height = -this.renderer.projection.y * 2;

    this.buffer = buffer;
};

/**
 * Applies the filter and adds it to the current filter stack.
 *
 * @param filterBlock {object} the filter that will be pushed to the current filter stack
 */
WebGLFilterManager.prototype.pushFilter = function (filterBlock) {
    var gl = this.renderer.gl;

    var projection = this.renderer.projection;
    var offset = this.renderer.offset;

    filterBlock._filterArea = filterBlock.target.filterArea || filterBlock.target.getBounds();

    // filter program
    // OPTIMISATION - the first filter is free if its a simple color change?
    this.filterStack.push(filterBlock);

    var filter = filterBlock.filterPasses[0];

    this.offsetX += filterBlock._filterArea.x;
    this.offsetY += filterBlock._filterArea.y;

    var texture = this.texturePool.pop();
    if (!texture) {
        texture = new FilterTexture(this.renderer.gl, this.width, this.height);
    }
    else {
        texture.resize(this.width, this.height);
    }

    gl.bindTexture(gl.TEXTURE_2D,  texture.texture);

    var filterArea = filterBlock._filterArea;// filterBlock.target.getBounds();///filterBlock.target.filterArea;

    var padding = filter.padding;
    filterArea.x -= padding;
    filterArea.y -= padding;
    filterArea.width += padding * 2;
    filterArea.height += padding * 2;

    var localX = filterArea.x,
        localY = filterArea.y;

    if (filterArea.x < 0) {
        filterArea.width += filterArea.x;
        filterArea.x = 0;
    }

    if (filterArea.y < 0) {
        filterArea.height += filterArea.y;
        filterArea.y = 0;
    }

    if (localX + filterArea.width > this.width) {
        filterArea.width = this.width - localX;
    }

    if (localY + filterArea.height > this.height) {
        filterArea.height = this.height - localY;
    }

    if (filterArea.width < 0) {
        filterArea.width = 0;
    }

    if (filterArea.height < 0) {
        filterArea.height = 0;
    }

    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  filterArea.width, filterArea.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, texture.frameBuffer);

    // set view port
    gl.viewport(0, 0, filterArea.width, filterArea.height);

    projection.x = filterArea.width/2;
    projection.y = -filterArea.height/2;

    offset.x = -filterArea.x;
    offset.y = -filterArea.y;

    // update projection
    // now restore the regular shader..
    // this.renderer.shaderManager.setShader(this.defaultShader);
    //gl.uniform2f(this.defaultShader.projectionVector, filterArea.width/2, -filterArea.height/2);
    //gl.uniform2f(this.defaultShader.offsetVector, -filterArea.x, -filterArea.y);

    gl.colorMask(true, true, true, true);
    gl.clearColor(0,0,0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    filterBlock._glFilterTexture = texture;

};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 *
 */
WebGLFilterManager.prototype.popFilter = function () {
    var gl = this.renderer.gl;

    var filterBlock = this.filterStack.pop();
    var filterArea = filterBlock._filterArea;
    var texture = filterBlock._glFilterTexture;
    var projection = this.renderer.projection;
    var offset = this.renderer.offset;

    if (filterBlock.filterPasses.length > 1) {
        gl.viewport(0, 0, filterArea.width, filterArea.height);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

        this.vertexArray[0] = 0;
        this.vertexArray[1] = filterArea.height;

        this.vertexArray[2] = filterArea.width;
        this.vertexArray[3] = filterArea.height;

        this.vertexArray[4] = 0;
        this.vertexArray[5] = 0;

        this.vertexArray[6] = filterArea.width;
        this.vertexArray[7] = 0;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        // now set the uvs..
        this.uvArray[2] = filterArea.width/this.width;
        this.uvArray[5] = filterArea.height/this.height;
        this.uvArray[6] = filterArea.width/this.width;
        this.uvArray[7] = filterArea.height/this.height;

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);

        var inputTexture = texture;
        var outputTexture = this.texturePool.pop();
        if (!outputTexture) {
            outputTexture = new FilterTexture(this.renderer.gl, this.width, this.height);
        }
        outputTexture.resize(this.width, this.height);

        // need to clear this FBO as it may have some left over elements from a previous filter.
        gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer );
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.disable(gl.BLEND);

        for (var i = 0; i < filterBlock.filterPasses.length-1; i++) {
            var filterPass = filterBlock.filterPasses[i];

            gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer );

            // set texture
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, inputTexture.texture);

            // draw texture..
            //filterPass.applyFilterPass(filterArea.width, filterArea.height);
            this.applyFilterPass(filterPass, filterArea, filterArea.width, filterArea.height);

            // swap the textures..
            var temp = inputTexture;
            inputTexture = outputTexture;
            outputTexture = temp;
        }

        gl.enable(gl.BLEND);

        texture = inputTexture;
        this.texturePool.push(outputTexture);
    }

    var filter = filterBlock.filterPasses[filterBlock.filterPasses.length-1];

    this.offsetX -= filterArea.x;
    this.offsetY -= filterArea.y;

    var sizeX = this.width;
    var sizeY = this.height;

    var offsetX = 0;
    var offsetY = 0;

    var buffer = this.buffer;

    // time to render the filters texture to the previous scene
    if (this.filterStack.length === 0) {
        gl.colorMask(true, true, true, true);//this.transparent);
    }
    else {
        var currentFilter = this.filterStack[this.filterStack.length-1];
        filterArea = currentFilter._filterArea;

        sizeX = filterArea.width;
        sizeY = filterArea.height;

        offsetX = filterArea.x;
        offsetY = filterArea.y;

        buffer =  currentFilter._glFilterTexture.frameBuffer;
    }

    // TODO need to remove these global elements..
    projection.x = sizeX/2;
    projection.y = -sizeY/2;

    offset.x = offsetX;
    offset.y = offsetY;

    filterArea = filterBlock._filterArea;

    var x = filterArea.x-offsetX;
    var y = filterArea.y-offsetY;

    // update the buffers..
    // make sure to flip the y!
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

    this.vertexArray[0] = x;
    this.vertexArray[1] = y + filterArea.height;

    this.vertexArray[2] = x + filterArea.width;
    this.vertexArray[3] = y + filterArea.height;

    this.vertexArray[4] = x;
    this.vertexArray[5] = y;

    this.vertexArray[6] = x + filterArea.width;
    this.vertexArray[7] = y;

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);

    this.uvArray[2] = filterArea.width/this.width;
    this.uvArray[5] = filterArea.height/this.height;
    this.uvArray[6] = filterArea.width/this.width;
    this.uvArray[7] = filterArea.height/this.height;

    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);

    gl.viewport(0, 0, sizeX, sizeY);

    // bind the buffer
    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer );

    // set the blend mode!
    //gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

    // set texture
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture.texture);

    // apply!
    this.applyFilterPass(filter, filterArea, sizeX, sizeY);

    // now restore the regular shader.. should happen automatically now..
    // this.renderer.shaderManager.setShader(this.defaultShader);
    // gl.uniform2f(this.defaultShader.projectionVector, sizeX/2, -sizeY/2);
    // gl.uniform2f(this.defaultShader.offsetVector, -offsetX, -offsetY);

    // return the texture to the pool
    this.texturePool.push(texture);
    filterBlock._glFilterTexture = null;
};


/**
 * Applies the filter to the specified area.
 *
 * @param filter {AbstractFilter} the filter that needs to be applied
 * @param filterArea {Texture} TODO - might need an update
 * @param width {number} the horizontal range of the filter
 * @param height {number} the vertical range of the filter
 */
WebGLFilterManager.prototype.applyFilterPass = function (filter, filterArea, width, height) {
    // use program
    var gl = this.renderer.gl;

    var shader = filter.shaders[gl.id];

    if (!shader) {
        shader = new Shader(gl);

        shader.fragmentSrc = filter.fragmentSrc;
        shader.uniforms = filter.uniforms;
        shader.init();

        filter.shaders[gl.id] = shader;
    }

    // set the shader
    this.renderer.shaderManager.setShader(shader);

//    gl.useProgram(shader.program);

    gl.uniform2f(shader.projectionVector, width/2, -height/2);
    gl.uniform2f(shader.offsetVector, 0,0);

    if (filter.uniforms.dimensions) {
        filter.uniforms.dimensions.value[0] = this.width;//width;
        filter.uniforms.dimensions.value[1] = this.height;//height;
        filter.uniforms.dimensions.value[2] = this.vertexArray[0];
        filter.uniforms.dimensions.value[3] = this.vertexArray[5];//filterArea.height;
    }

    shader.syncUniforms();

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
    gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.vertexAttribPointer(shader.aColor, 2, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // draw the filter...
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );

    this.renderer.drawCount++;
};

/**
 * Initialises the shader buffers.
 *
 */
WebGLFilterManager.prototype.initShaderBuffers = function () {
    var gl = this.renderer.gl;

    // create some buffers
    this.vertexBuffer = gl.createBuffer();
    this.uvBuffer = gl.createBuffer();
    this.colorBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // bind and upload the vertexs..
    // keep a reference to the vertexFloatData..
    this.vertexArray = new Float32Array([0.0, 0.0,
                                         1.0, 0.0,
                                         0.0, 1.0,
                                         1.0, 1.0]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertexArray, gl.STATIC_DRAW);

    // bind and upload the uv buffer
    this.uvArray = new Float32Array([0.0, 0.0,
                                     1.0, 0.0,
                                     0.0, 1.0,
                                     1.0, 1.0]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.uvArray, gl.STATIC_DRAW);

    this.colorArray = new Float32Array([1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF,
                                        1.0, 0xFFFFFF]);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.colorArray, gl.STATIC_DRAW);

    // bind and upload the index
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), gl.STATIC_DRAW);

};

/**
 * Destroys the filter and removes it from the filter stack.
 *
 */
WebGLFilterManager.prototype.destroy = function () {
    var gl = this.renderer.gl;

    this.filterStack = null;

    this.offsetX = 0;
    this.offsetY = 0;

    // destroy textures
    for (var i = 0; i < this.texturePool.length; i++) {
        this.texturePool[i].destroy();
    }

    this.texturePool = null;

    //destroy buffers..
    gl.deleteBuffer(this.vertexBuffer);
    gl.deleteBuffer(this.uvBuffer);
    gl.deleteBuffer(this.colorBuffer);
    gl.deleteBuffer(this.indexBuffer);

    this.renderer = null;
};

},{"../shaders/Shader":35,"../utils/FilterTexture":37,"./WebGLManager":28}],28:[function(require,module,exports){
/**
 * @class
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLManager(renderer) {
    /**
     * The renderer this manager works for.
     *
     * @member {WebGLRenderer}
     */
    this.renderer = renderer;
}

WebGLManager.prototype.constructor = WebGLManager;
module.exports = WebGLManager;

WebGLManager.prototype.destroy = function () {
    this.renderer = null;
};

},{}],29:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    WebGLGraphics = require('../utils/WebGLGraphics');

/**
 * @class
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLMaskManager(renderer) {
    WebGLManager.call(this, renderer);
}

WebGLMaskManager.prototype = Object.create(WebGLManager.prototype);
WebGLMaskManager.prototype.constructor = WebGLMaskManager;
module.exports = WebGLMaskManager;

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param maskData {any[]}
 */
WebGLMaskManager.prototype.pushMask = function (maskData) {
    if (maskData.dirty) {
        WebGLGraphics.updateGraphics(maskData, this.renderer.gl);
    }

    if (!maskData._webGL[this.renderer.gl.id].data.length) {
        return;
    }

    this.renderer.stencilManager.pushStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0], this.renderer);
};

/**
 * Removes the last filter from the filter stack and doesn't return it.
 *
 * @param maskData {any[]}
 */
WebGLMaskManager.prototype.popMask = function (maskData) {
    this.renderer.stencilManager.popStencil(maskData, maskData._webGL[this.renderer.gl.id].data[0], this.renderer);
};

},{"../utils/WebGLGraphics":39,"./WebGLManager":28}],30:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    PrimitiveShader = require('../shaders/PrimitiveShader'),
    ComplexPrimitiveShader = require('../shaders/ComplexPrimitiveShader'),
    Shader = require('../shaders/Shader'),
    FastShader = require('../shaders/FastShader'),
    StripShader = require('../shaders/StripShader');

/**
 * @class
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLShaderManager(renderer) {
    WebGLManager.call(this, renderer);

    /**
     * @member {number}
     */
    this.maxAttibs = 10;

    /**
     * @member {any[]}
     */
    this.attribState = [];

    /**
     * @member {any[]}
     */
    this.tempAttribState = [];

    for (var i = 0; i < this.maxAttibs; i++) {
        this.attribState[i] = false;
    }

    /**
     * @member {any[]}
     */
    this.stack = [];

    /**
     * @member {number}
     * @private
     */
    this._currentId = -1;

    /**
     * @member {Shader}
     * @private
     */
    this.currentShader = null;

    // this shader is used for rendering primitives
    this.primitiveShader = null;

    // this shader is used for rendering triangle strips
    this.complexPrimitiveShader = null;

    // this shader is used for the default sprite rendering
    this.defaultShader = null;

    // this shader is used for the fast sprite rendering
    this.fastShader = null;

    // the next one is used for rendering triangle strips
    this.stripShader = null;

    // listen for context and update necessary shaders
    var self = this;
    this.renderer.on('context', function (event) {
        var gl = event.data;

        // this shader is used for rendering primitives
        self.primitiveShader = new PrimitiveShader(gl);

        // this shader is used for rendering triangle strips
        self.complexPrimitiveShader = new ComplexPrimitiveShader(gl);

        // this shader is used for the default sprite rendering
        self.defaultShader = new Shader(gl);

        // this shader is used for the fast sprite rendering
        self.fastShader = new FastShader(gl);

        // the next one is used for rendering triangle strips
        self.stripShader = new StripShader(gl);

        self.setShader(self.defaultShader);
    });
}

WebGLShaderManager.prototype = Object.create(WebGLManager.prototype);
WebGLShaderManager.prototype.constructor = WebGLShaderManager;
module.exports = WebGLShaderManager;

/**
 * Takes the attributes given in parameters.
 *
 * @param attribs {Array} attribs
 */
WebGLShaderManager.prototype.setAttribs = function (attribs) {
    // reset temp state
    var i;

    for (i = 0; i < this.tempAttribState.length; i++) {
        this.tempAttribState[i] = false;
    }

    // set the new attribs
    for (var a in attribs) {
        this.tempAttribState[attribs[a]] = true;
    }

    var gl = this.renderer.gl;

    for (i = 0; i < this.attribState.length; i++) {
        if (this.attribState[i] !== this.tempAttribState[i]) {
            this.attribState[i] = this.tempAttribState[i];

            if (this.attribState[i]) {
                gl.enableVertexAttribArray(i);
            }
            else {
                gl.disableVertexAttribArray(i);
            }
        }
    }
};

/**
 * Sets the current shader.
 *
 * @param shader {Any}
 */
WebGLShaderManager.prototype.setShader = function (shader) {
    if (this._currentId === shader.uuid) {
        return false;
    }

    this._currentId = shader.uuid;

    this.currentShader = shader;

    this.renderer.gl.useProgram(shader.program);
    this.setAttribs(shader.attributes);

    return true;
};

/**
 * Destroys this object.
 *
 */
WebGLShaderManager.prototype.destroy = function () {
    this.attribState = null;

    this.tempAttribState = null;

    this.primitiveShader.destroy();
    this.primitiveShader = null;

    this.complexPrimitiveShader.destroy();
    this.complexPrimitiveShader = null;

    this.defaultShader.destroy();
    this.defaultShader = null;

    this.fastShader.destroy();
    this.fastShader = null;

    this.stripShader.destroy();
    this.stripShader = null;

    this.renderer = null;
};

},{"../shaders/ComplexPrimitiveShader":32,"../shaders/FastShader":33,"../shaders/PrimitiveShader":34,"../shaders/Shader":35,"../shaders/StripShader":36,"./WebGLManager":28}],31:[function(require,module,exports){
var WebGLManager = require('./WebGLManager'),
    utils = require('../../../utils');

/**
 * @class
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this manager works for.
 */
function WebGLStencilManager(renderer) {
    WebGLManager.call(this, renderer);

    this.stencilStack = [];
    this.reverse = true;
    this.count = 0;
}

WebGLStencilManager.prototype = Object.create(WebGLManager.prototype);
WebGLStencilManager.prototype.constructor = WebGLStencilManager;
module.exports = WebGLStencilManager;

/**
 * Applies the Mask and adds it to the current filter stack.
 *
 * @param graphics {Graphics}
 * @param webGLData {any[]}
 */
WebGLStencilManager.prototype.pushStencil = function (graphics, webGLData) {
    var gl = this.renderer.gl;

    this.bindGraphics(graphics, webGLData, this.renderer);

    if (this.stencilStack.length === 0) {
        gl.enable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        this.reverse = true;
        this.count = 0;
    }

    this.stencilStack.push(webGLData);

    var level = this.count;

    gl.colorMask(false, false, false, false);

    gl.stencilFunc(gl.ALWAYS,0,0xFF);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

    // draw the triangle strip!

    if (webGLData.mode === 1) {
        gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );

        if (this.reverse) {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        // draw a quad to increment..
        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

        if (this.reverse) {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }

        this.reverse = !this.reverse;
    }
    else {
        if (!this.reverse) {
            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
        }
        else {
            gl.stencilFunc(gl.EQUAL,level, 0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
        }

        gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

        if (!this.reverse) {
            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);
        }
        else {
            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
        }
    }

    gl.colorMask(true, true, true, true);
    gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);

    this.count++;
};

/**
 * TODO this does not belong here!
 *
 * @param graphics {Graphics}
 * @param webGLData {Array}
 */
WebGLStencilManager.prototype.bindGraphics = function (graphics, webGLData) {
    //if (this._currentGraphics === graphics)return;
    this._currentGraphics = graphics;

    var gl = this.renderer.gl;

     // bind the graphics object..
    var projection = this.renderer.projection,
        offset = this.renderer.offset,
        shader;// = this.renderer.shaderManager.primitiveShader;

    if (webGLData.mode === 1) {
        shader = this.renderer.shaderManager.complexPrimitiveShader;

        this.renderer.shaderManager.setShader(shader);

        gl.uniform1f(shader.flipY, this.renderer.flipY);

        gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));

        gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
        gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

        gl.uniform3fv(shader.tintColor, utils.hex2rgb(graphics.tint));
        gl.uniform3fv(shader.color, webGLData.color);

        gl.uniform1f(shader.alpha, graphics.worldAlpha * webGLData.alpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);


        // now do the rest..
        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
    else {
        //this.renderer.shaderManager.activatePrimitiveShader();
        shader = this.renderer.shaderManager.primitiveShader;
        this.renderer.shaderManager.setShader( shader );

        gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));

        gl.uniform1f(shader.flipY, this.renderer.flipY);
        gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
        gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

        gl.uniform3fv(shader.tintColor, utils.hex2rgb(graphics.tint));

        gl.uniform1f(shader.alpha, graphics.worldAlpha);

        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
        gl.vertexAttribPointer(shader.aColor, 4, gl.FLOAT, false,4 * 6, 2 * 4);

        // set the index buffer!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
    }
};

/**
 * @param graphics {Graphics}
 * @param webGLData {Array}
 */
WebGLStencilManager.prototype.popStencil = function (graphics, webGLData) {
	var gl = this.renderer.gl;

    this.stencilStack.pop();

    this.count--;

    if (this.stencilStack.length === 0) {
        // the stack is empty!
        gl.disable(gl.STENCIL_TEST);

    }
    else {

        var level = this.count;

        this.bindGraphics(graphics, webGLData, this.renderer);

        gl.colorMask(false, false, false, false);

        if (webGLData.mode === 1) {
            this.reverse = !this.reverse;

            if (this.reverse) {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            // draw a quad to increment..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

            gl.stencilFunc(gl.ALWAYS,0,0xFF);
            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);

            // draw the triangle strip!
            gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );

            if (!this.reverse) {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }

        }
        else {
          //  console.log("<<>>")
            if (!this.reverse) {
                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);
            }
            else {
                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);
                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);
            }

            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );

            if (!this.reverse) {
                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);
            }
            else {
                gl.stencilFunc(gl.EQUAL,level, 0xFF);
            }
        }

        gl.colorMask(true, true, true, true);
        gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);


    }
};

/**
 * Destroys the mask stack.
 *
 */
WebGLStencilManager.prototype.destroy = function () {
    this.renderer = null;
    this.stencilStack = null;
};

},{"../../../utils":50,"./WebGLManager":28}],32:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @namespace PIXI
 * @param gl {WebGLContext} the current WebGL drawing context
 */
function ComplexPrimitiveShader(gl) {
    Shader.call(this,
        gl,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            // 'attribute vec2 aTextureCoord;',
            // 'attribute vec4 aColor;',

            'uniform mat3 translationMatrix;',
            'uniform vec2 projectionVector;',
            'uniform vec2 offsetVector;',

            'uniform vec3 tint;',
            'uniform float alpha;',
            'uniform vec3 color;',
            'uniform float flipY;',
            'varying vec4 vColor;',

            'void main(void) {',
            '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
            '   v -= offsetVector.xyx;',
            '   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);',
            '   vColor = vec4(color * alpha * tint, alpha);',//" * vec4(tint * alpha, alpha);',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'varying vec4 vColor;',

            'void main(void) {',
            '   gl_FragColor = vColor;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            tint:   { type: '3f', value: [0, 0, 0] },
            flipY:  { type: '1f', value: 0 },
            alpha:  { type: '1f', value: 0 },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) }
        }
    );
}

ComplexPrimitiveShader.prototype = Object.create(Shader.prototype);
ComplexPrimitiveShader.prototype.constructor = ComplexPrimitiveShader;
module.exports = ComplexPrimitiveShader;

},{"./Shader":35}],33:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @extends Shader
 * @namespace PIXI
 * @param gl {WebGLContext} the current WebGL drawing context
 */
function FastShader(gl) {
    Shader.call(this,
        gl,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec2 aTextureCoord;',
            'attribute vec4 aColor;',

            'attribute vec2 aPositionCoord;',
            'attribute vec2 aScale;',
            'attribute float aRotation;',

            'uniform vec2 projectionVector;',
            'uniform vec2 offsetVector;',
            'uniform mat3 uMatrix;',

            'varying vec2 vTextureCoord;',
            'varying vec4 vColor;',

            'const vec2 center = vec2(-1.0, 1.0);',

            'void main(void) {',
            '   vec2 v;',
            '   vec2 sv = aVertexPosition * aScale;',
            '   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);',
            '   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);',
            '   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;',
            '   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);',
            '   vTextureCoord = aTextureCoord;',
          //  '   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;',
            '   vColor = aColor;',
            '}'
        ].join('\n'),
        // fragment shader, use default
        null,
        // custom uniforms
        {
            uMatrix: { type: 'mat3', value: new Float32Array(9) }
        },
        // custom attributes
        {
            aPositionCoord: 0,
            aRotation:      0,
            aScale:         0
        }
    );
}

FastShader.prototype = Object.create(Shader.prototype);
FastShader.prototype.constructor = FastShader;
module.exports = FastShader;

},{"./Shader":35}],34:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @namespace PIXI
 * @param gl {WebGLContext} the current WebGL drawing context
 */
function PrimitiveShader(gl) {
    Shader.call(this,
        gl,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            // 'attribute vec2 aTextureCoord;',
            'attribute vec4 aColor;',

            'uniform mat3 translationMatrix;',
            'uniform vec2 projectionVector;',
            'uniform vec2 offsetVector;',
            'uniform float alpha;',
            'uniform float flipY;',
            'uniform vec3 tint;',

            'varying vec4 vColor;',

            'void main(void) {',
            '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
            '   v -= offsetVector.xyx;',
            '   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);',
            '   vColor = aColor * vec4(tint * alpha, alpha);',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'varying vec4 vColor;',

            'void main(void) {',
            '   gl_FragColor = vColor;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            tint:   { type: '3f', value: [0, 0, 0] },
            flipY:  { type: '1f', value: 0 },
            alpha:  { type: '1f', value: 0 },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) }
        }
    );
}

PrimitiveShader.prototype = Object.create(Shader.prototype);
PrimitiveShader.prototype.constructor = PrimitiveShader;
module.exports = PrimitiveShader;

},{"./Shader":35}],35:[function(require,module,exports){
var utils = require('../../../utils');

/**
 * @class
 * @namespace PIXI
 * @param [fragmentSrc] {string} The source of the fragment shader.
 * @param [vertexSrc] {string} The source of the vertex shader.
 */
function Shader(gl, vertexSrc, fragmentSrc, customUniforms, customAttributes) {
    /**
     * @member {number}
     * @readonly
     */
    this.uuid = utils.uuid();

    /**
     * @member {WebGLContext}
     * @readonly
     */
    this.gl = gl;

    /**
     * The WebGL program.
     * @member {WebGLProgram}
     * @readonly
     */
    this.program = null;

    this.uniforms = {
        uSampler:           { type: 'sampler2D', value: 0 },
        projectionVector:   { type: '2f', value: { x: 0, y: 0 } },
        offsetVector:       { type: '2f', value: { x: 0, y: 0 } },
        dimensions:         { type: '4f', value: new Float32Array(4) }
    };

    for (var u in customUniforms) {
        this.uniforms[u] = customUniforms[u];
    }

    this.attributes = {
        aVertexPosition:    0,
        aTextureCoord:      0,
        aColor:             0
    };

    for (var a in customAttributes) {
        this.attributes[a] = customAttributes[a];
    }

    this.textureCount = 0;

    /**
     * The vertex shader.
     * @member {Array}
     */
    this.vertexSrc = vertexSrc || [
        'attribute vec2 aVertexPosition;',
        'attribute vec2 aTextureCoord;',
        'attribute vec4 aColor;',

        'uniform vec2 projectionVector;',
        'uniform vec2 offsetVector;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'const vec2 center = vec2(-1.0, 1.0);',

        'void main(void) {',
        '   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);',
        '   vTextureCoord = aTextureCoord;',
        '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',
        '}'
    ].join('\n');

    /**
     * The fragment shader.
     * @member {Array}
     */
    this.fragmentSrc = fragmentSrc || [
        'precision lowp float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',
        '}'
    ].join('\n');

    this.init();
}

Shader.prototype.constructor = Shader;
module.exports = Shader;

Shader.prototype.init = function () {
    this.compile();

    this.gl.useProgram(this.program);

    this.cacheUniformLocations(Object.keys(this.uniforms));
    this.cacheAttributeLocations(Object.keys(this.attributes));
};

Shader.prototype.cacheUniformLocations = function (keys) {
    for (var i = 0; i < keys.length; ++i) {
        this.uniforms[keys[i]]._location = this.gl.getUniformLocation(this.program, keys[i]);
    }
};

Shader.prototype.cacheAttributeLocations = function (keys) {
    for (var i = 0; i < keys.length; ++i) {
        this.attributes[keys[i]] = this.gl.getAttribLocation(this.program, keys[i]);
    }

    // TODO: Check if this is needed anymore...

    // Begin worst hack eva //

    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?
    // maybe its something to do with the current state of the gl context.
    // I'm convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel
    // If theres any webGL people that know why could happen please help :)
    // if (this.attributes.aColor === -1) {
    //     this.attributes.aColor = 2;
    // }

    // End worst hack eva //
};

Shader.prototype.compile = function () {
    var gl = this.gl;

    var glVertShader = this._glCompile(gl.VERTEX_SHADER, this.vertexSrc);
    var glFragShader = this._glCompile(gl.FRAGMENT_SHADER, this.fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);
    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        window.console.error('Pixi.js Error: Could not initialize shader.');
        window.console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        window.console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '') {
            window.console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return (this.program = program);
};

Shader.prototype.syncUniforms = function () {
    var gl = this.gl;

    this.textureCount = 1;

    for (var key in this.uniforms) {
        var uniform = this.uniforms[key],
            location = uniform._location,
            value = uniform.value,
            i, il;

        switch (uniform.type) {
            case 'i':
            case '1i':
                gl.uniform1i(location, value);
                break;

            case 'f':
            case '1f':
                gl.uniform1f(location, value);
                break;

            case '2f':
                gl.uniform2f(location, value[0], value[1]);
                break;

            case '3f':
                gl.uniform3f(location, value[0], value[1], value[2]);
                break;

            case '4f':
                gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                break;

            // a 2D Point object
            case 'v2':
                gl.uniform2f(location, value.x, value.y);
                break;

            // a 3D Point object
            case 'v3':
                gl.uniform3f(location, value.x, value.y, value.z);
                break;

            // a 4D Point object
            case 'v4':
                gl.uniform4f(location, value.x, value.y, value.z, value.w);
                break;

            case '1iv':
                gl.uniform1iv(location, value);
                break;

            case '3iv':
                gl.uniform3iv(location, value);
                break;

            case '1fv':
                gl.uniform1fv(location, value);
                break;

            case '2fv':
                gl.uniform2fv(location, value);
                break;

            case '3fv':
                gl.uniform3fv(location, value);
                break;

            case '4fv':
                gl.uniform4fv(location, value);
                break;

            case 'm2':
            case 'mat2':
            case 'Matrix2fv':
                gl.uniformMatrix2fv(location, uniform.transpose, value);
                break;

            case 'm3':
            case 'mat3':
            case 'Matrix3fv':
                gl.uniformMatrix3fv(location, uniform.transpose, value);
                break;

            case 'm4':
            case 'mat4':
            case 'Matrix4fv':
                gl.uniformMatrix4fv(location, uniform.transpose, value);
                break;

            // a Color Value
            case 'c':
                if (typeof value === 'number') {
                    value = utils.hex2rgb(value);
                }

                gl.uniform3f(location, value[0], value[1], value[2]);
                break;

            // flat array of integers (JS or typed array)
            case 'iv1':
                gl.uniform1iv(location, value);
                break;

            // flat array of integers with 3 x N size (JS or typed array)
            case 'iv':
                gl.uniform3iv(location, value);
                break;

            // flat array of floats (JS or typed array)
            case 'fv1':
                gl.uniform1fv(location, value);
                break;

            // flat array of floats with 3 x N size (JS or typed array)
            case 'fv':
                gl.uniform3fv(location, value);
                break;

            // array of 2D Point objects
            case 'v2v':
                if (!uniform._array) {
                    uniform._array = new Float32Array(2 * value.length);
                }

                for (i = 0, il = value.length; i < il; ++i) {
                    uniform._array[i * 2]       = value[i].x;
                    uniform._array[i * 2 + 1]   = value[i].y;
                }

                gl.uniform2fv(location, uniform._array);
                break;

            // array of 3D Point objects
            case 'v3v':
                if (!uniform._array) {
                    uniform._array = new Float32Array(3 * value.length);
                }

                for (i = 0, il = value.length; i < il; ++i) {
                    uniform._array[i * 3]       = value[i].x;
                    uniform._array[i * 3 + 1]   = value[i].y;
                    uniform._array[i * 3 + 2]   = value[i].z;

                }

                gl.uniform3fv(location, uniform._array);
                break;

            // array of 4D Point objects
            case 'v4v':
                if (!uniform._array) {
                    uniform._array = new Float32Array(4 * value.length);
                }

                for (i = 0, il = value.length; i < il; ++i) {
                    uniform._array[i * 4]       = value[i].x;
                    uniform._array[i * 4 + 1]   = value[i].y;
                    uniform._array[i * 4 + 2]   = value[i].z;
                    uniform._array[i * 4 + 3]   = value[i].w;

                }

                gl.uniform4fv(location, uniform._array);
                break;

            case 't':
            case 'sampler2D':
                if (!uniform.value || !uniform.value.baseTexture || !uniform.value.baseTexture.hasLoaded) {
                    break;
                }

                // activate this texture
                gl.activeTexture(gl['TEXTURE' + this.textureCount]);

                // bind the texture
                gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id]);

                // set uniform to texture index
                gl.uniform1i(uniform._location, this.textureCount);

                // increment next texture id
                this.textureCount++;

                // initialize the texture if we haven't yet
                if (!uniform._init) {
                    this.initSampler2D(uniform);

                    uniform._init = true;
                }
                break;

            default:
                window.console.warn('Pixi.js Shader Warning: Unknown uniform type: ' + uniform.type);
        }
    }
};


/**
 * Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)
 *
 */
Shader.prototype.initSampler2D = function (uniform) {
    var gl = this.gl;

    //  Extended texture data
    if (uniform.textureData) {
        var data = uniform.textureData;

        // GLTexture = mag linear, min linear_mipmap_linear, wrap repeat + gl.generateMipmap(gl.TEXTURE_2D);
        // GLTextureLinear = mag/min linear, wrap clamp
        // GLTextureNearestRepeat = mag/min NEAREST, wrap repeat
        // GLTextureNearest = mag/min nearest, wrap clamp
        // AudioTexture = whatever + luminance + width 512, height 2, border 0
        // KeyTexture = whatever + luminance + width 256, height 2, border 0

        //  magFilter can be: gl.LINEAR, gl.LINEAR_MIPMAP_LINEAR or gl.NEAREST
        //  wrapS/T can be: gl.CLAMP_TO_EDGE or gl.REPEAT

        var magFilter = (data.magFilter) ? data.magFilter : gl.LINEAR;
        var minFilter = (data.minFilter) ? data.minFilter : gl.LINEAR;
        var wrapS = (data.wrapS) ? data.wrapS : gl.CLAMP_TO_EDGE;
        var wrapT = (data.wrapT) ? data.wrapT : gl.CLAMP_TO_EDGE;
        var format = (data.luminance) ? gl.LUMINANCE : gl.RGBA;

        if (data.repeat) {
            wrapS = gl.REPEAT;
            wrapT = gl.REPEAT;
        }

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!data.flipY);

        if (data.width) {
            var width = (data.width) ? data.width : 512;
            var height = (data.height) ? data.height : 2;
            var border = (data.border) ? data.border : 0;

            // void texImage2D(GLenum target, GLint level, GLenum internalformat, GLsizei width, GLsizei height, GLint border, GLenum format, GLenum type, ArrayBufferView? pixels);
            gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, border, format, gl.UNSIGNED_BYTE, null);
        }
        else {
            //  void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, ImageData? pixels);
            gl.texImage2D(gl.TEXTURE_2D, 0, format, gl.RGBA, gl.UNSIGNED_BYTE, uniform.value.baseTexture.source);
        }

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
    }
};

/**
 * Destroys the shader.
 *
 */
Shader.prototype.destroy = function () {
    this.gl.deleteProgram(this.program);

    this.gl = null;
    this.uniforms = null;
    this.attributes = null;

    this.vertexSrc = null;
    this.fragmentSrc = null;
};

Shader.prototype._glCompile = function (type, src) {
    var shader = this.gl.createShader(type);

    if (Array.isArray(src)) {
        debugger;
    }

    this.gl.shaderSource(shader, src);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
        window.console.log(this.gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

},{"../../../utils":50}],36:[function(require,module,exports){
var Shader = require('./Shader');

/**
 * @class
 * @namespace PIXI
 * @param gl {WebGLContext} the current WebGL drawing context
 */
function StripShader(gl) {
    Shader.call(this,
        gl,
        // vertex shader
        [
            'attribute vec2 aVertexPosition;',
            'attribute vec2 aTextureCoord;',
            // 'attribute vec4 aColor;',

            'uniform mat3 translationMatrix;',
            'uniform vec2 projectionVector;',
            'uniform vec2 offsetVector;',

            'varying vec2 vTextureCoord;',

            'void main(void) {',
            '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',
            '   v -= offsetVector.xyx;',
            '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);',
            '   vTextureCoord = aTextureCoord;',
            '}'
        ].join('\n'),
        // fragment shader
        [
            'precision mediump float;',

            'uniform float alpha;',
            'uniform sampler2D uSampler;',

            'varying vec2 vTextureCoord;',

            'void main(void) {',
            '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;',
            '}'
        ].join('\n'),
        // custom uniforms
        {
            alpha:  { type: '1f', value: 0 },
            translationMatrix: { type: 'mat3', value: new Float32Array(9) }
        }
    );
}

StripShader.prototype = Object.create(Shader.prototype);
StripShader.prototype.constructor = StripShader;
module.exports = StripShader;

},{"./Shader":35}],37:[function(require,module,exports){
var CONST = require('../../../const');

/**
 * @class
 * @namespace PIXI
 * @param gl {WebGLContext} the current WebGL drawing context
 * @param width {number} the horizontal range of the filter
 * @param height {number} the vertical range of the filter
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 */
function FilterTexture(gl, width, height, scaleMode) {
    /**
     * @member {WebGLContext}
     */
    this.gl = gl;

    // next time to create a frame buffer and texture

    /**
     * @member {Any}
     */
    this.frameBuffer = gl.createFramebuffer();

    /**
     * @member {Any}
     */
    this.texture = gl.createTexture();

    /**
     * @member {number}
     */
    scaleMode = scaleMode || CONST.scaleModes.DEFAULT;

    gl.bindTexture(gl.TEXTURE_2D,  this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === CONST.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);

    // required for masking a mask??
    this.renderBuffer = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);

    // reset render buffer
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);

    this.resize(width, height);
}

FilterTexture.prototype.constructor = FilterTexture;
module.exports = FilterTexture;

/**
 * Clears the filter texture.
 *
 */
FilterTexture.prototype.clear = function () {
    var gl = this.gl;

    gl.clearColor(0,0,0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};

/**
 * Resizes the texture to the specified width and height
 *
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
FilterTexture.prototype.resize = function (width, height) {
    if (this.width === width && this.height === height) {
        return;
    }

    this.width = width;
    this.height = height;

    var gl = this.gl;

    gl.bindTexture(gl.TEXTURE_2D,  this.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  width , height , 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    // update the stencil buffer width and height
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width , height);

    // reset render buffer
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
};

/**
 * Destroys the filter texture.
 *
 */
FilterTexture.prototype.destroy = function () {
    var gl = this.gl;
    gl.deleteFramebuffer( this.frameBuffer );
    gl.deleteTexture( this.texture );

    this.frameBuffer = null;
    this.texture = null;
};

},{"../../../const":4}],38:[function(require,module,exports){
/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 *
 * Heavily inspired by LibGDX's WebGLSpriteBatch:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/WebGLSpriteBatch.java
 */

/**
 * @class
 * @private
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function WebGLFastSpriteBatch(renderer) {
    /**
     * The renderer instance this sprite batch operates on.
     *
     * @member {WebGLRenderer}
     */
    this.renderer = renderer;

    /**
     *
     *
     * @member {number}
     */
    this.vertSize = 10;

    /**
     *
     *
     * @member {number}
     */
    this.maxSize = 6000;//Math.pow(2, 16) /  this.vertSize;

    /**
     *
     *
     * @member {number}
     */
    this.size = this.maxSize;

    //the total number of floats in our batch
    var numVerts = this.size * 4 *  this.vertSize;

    //the total number of indices in our batch
    var numIndices = this.maxSize * 6;

    /**
     * Vertex data
     *
     * @member {Float32Array}
     */
    this.vertices = new Float32Array(numVerts);

    /**
     * Index data
     *
     * @member {Uint16Array}
     */
    this.indices = new Uint16Array(numIndices);

    /**
     *
     *
     * @member {object}
     */
    this.vertexBuffer = null;

    /**
     *
     *
     * @member {object}
     */
    this.indexBuffer = null;

    /**
     *
     *
     * @member {number}
     */
    this.lastIndexCount = 0;

    for (var i=0, j=0; i < numIndices; i += 6, j += 4) {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    /**
     *
     *
     * @member {boolean}
     */
    this.drawing = false;

    /**
     *
     *
     * @member {number}
     */
    this.currentBatchSize = 0;

    /**
     *
     *
     * @member {BaseTexture}
     */
    this.currentBaseTexture = null;

    /**
     *
     *
     * @member {number}
     */
    this.currentBlendMode = 0;

    /**
     *
     *
     * @member {object}
     */
    this.shader = null;

    /**
     *
     *
     * @member {Matrix}
     */
    this.matrix = null;

    // listen for context and update necessary buffers
    var self = this;
    this.renderer.on('context', function () {
        self.setupContext();
    });
}

WebGLFastSpriteBatch.prototype.constructor = WebGLFastSpriteBatch;
module.exports = WebGLFastSpriteBatch;

/**
 * Sets the WebGL Context.
 *
 * @param gl {WebGLContext} the current WebGL drawing context
 */
WebGLFastSpriteBatch.prototype.setupContext = function () {
    var gl = this.renderer.gl;

    // create a couple of buffers
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.

    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
};

/**
 * @param spriteBatch {SpriteBatch} The SpriteBatch container to prepare for.
 */
WebGLFastSpriteBatch.prototype.begin = function (spriteBatch) {
    this.shader = this.renderer.shaderManager.fastShader;

    this.matrix = spriteBatch.worldTransform.toArray(true);

    this.start();
};

/**
 */
WebGLFastSpriteBatch.prototype.end = function () {
    this.flush();
};

/**
 * @param spriteBatch {SpriteBatch} The SpriteBatch container to render.
 */
WebGLFastSpriteBatch.prototype.render = function (spriteBatch) {
    var children = spriteBatch.children;
    var sprite = children[0];

    // if the uvs have not updated then no point rendering just yet!

    // check texture.
    if (!sprite.texture._uvs) {
        return;
    }

    this.currentBaseTexture = sprite.texture.baseTexture;

    // check blend mode
    if (sprite.blendMode !== this.renderer.blendModeManager.currentBlendMode) {
        this.flush();
        this.renderer.blendModeManager.setBlendMode(sprite.blendMode);
    }

    for (var i=0,j= children.length; i<j; i++) {
        this.renderSprite(children[i]);
    }

    this.flush();
};

/**
 * @param sprite {Sprite} The Sprite to render.
 */
WebGLFastSpriteBatch.prototype.renderSprite = function (sprite) {
    //sprite = children[i];
    if (!sprite.visible) {
        return;
    }

    // TODO trim??
    if (sprite.texture.baseTexture !== this.currentBaseTexture) {
        this.flush();
        this.currentBaseTexture = sprite.texture.baseTexture;

        if (!sprite.texture._uvs) {
            return;
        }
    }

    var uvs, vertices = this.vertices, width, height, w0, w1, h0, h1, index;

    uvs = sprite.texture._uvs;

    width = sprite.texture.frame.width;
    height = sprite.texture.frame.height;

    if (sprite.texture.trim) {
        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
        var trim = sprite.texture.trim;

        w1 = trim.x - sprite.anchor.x * trim.width;
        w0 = w1 + sprite.texture.crop.width;

        h1 = trim.y - sprite.anchor.y * trim.height;
        h0 = h1 + sprite.texture.crop.height;
    }
    else {
        w0 = (sprite.texture.frame.width ) * (1-sprite.anchor.x);
        w1 = (sprite.texture.frame.width ) * -sprite.anchor.x;

        h0 = sprite.texture.frame.height * (1-sprite.anchor.y);
        h1 = sprite.texture.frame.height * -sprite.anchor.y;
    }

    index = this.currentBatchSize * 4 * this.vertSize;

    // xy
    vertices[index++] = w1;
    vertices[index++] = h1;

    vertices[index++] = sprite.position.x;
    vertices[index++] = sprite.position.y;

    //scale
    vertices[index++] = sprite.scale.x;
    vertices[index++] = sprite.scale.y;

    //rotation
    vertices[index++] = sprite.rotation;

    // uv
    vertices[index++] = uvs.x0;
    vertices[index++] = uvs.y1;
    // color
    vertices[index++] = sprite.alpha;


    // xy
    vertices[index++] = w0;
    vertices[index++] = h1;

    vertices[index++] = sprite.position.x;
    vertices[index++] = sprite.position.y;

    //scale
    vertices[index++] = sprite.scale.x;
    vertices[index++] = sprite.scale.y;

     //rotation
    vertices[index++] = sprite.rotation;

    // uv
    vertices[index++] = uvs.x1;
    vertices[index++] = uvs.y1;
    // color
    vertices[index++] = sprite.alpha;


    // xy
    vertices[index++] = w0;
    vertices[index++] = h0;

    vertices[index++] = sprite.position.x;
    vertices[index++] = sprite.position.y;

    //scale
    vertices[index++] = sprite.scale.x;
    vertices[index++] = sprite.scale.y;

     //rotation
    vertices[index++] = sprite.rotation;

    // uv
    vertices[index++] = uvs.x2;
    vertices[index++] = uvs.y2;
    // color
    vertices[index++] = sprite.alpha;




    // xy
    vertices[index++] = w1;
    vertices[index++] = h0;

    vertices[index++] = sprite.position.x;
    vertices[index++] = sprite.position.y;

    //scale
    vertices[index++] = sprite.scale.x;
    vertices[index++] = sprite.scale.y;

     //rotation
    vertices[index++] = sprite.rotation;

    // uv
    vertices[index++] = uvs.x3;
    vertices[index++] = uvs.y3;
    // color
    vertices[index++] = sprite.alpha;

    // increment the batchs
    this.currentBatchSize++;

    if (this.currentBatchSize >= this.size) {
        this.flush();
    }
};

/**
 *
 */
WebGLFastSpriteBatch.prototype.flush = function () {
    // If the batch is length 0 then return as there is nothing to draw
    if (this.currentBatchSize === 0) {
        return;
    }

    var gl = this.renderer.gl;

    // bind the current texture
    if (!this.currentBaseTexture._glTextures[gl.id]) {
        this.renderer.updateTexture(this.currentBaseTexture, gl);
    }
    //TODO-SHOUD THIS BE ELSE??!?!?!
    else {
        gl.bindTexture(gl.TEXTURE_2D, this.currentBaseTexture._glTextures[gl.id]);
    }

    // upload the verts to the buffer

    if (this.currentBatchSize > ( this.size * 0.5 ) ) {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    }
    else {
        var view = this.vertices.subarray(0, this.currentBatchSize * 4 * this.vertSize);

        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }

    // now draw those suckas!
    gl.drawElements(gl.TRIANGLES, this.currentBatchSize * 6, gl.UNSIGNED_SHORT, 0);

    // then reset the batch!
    this.currentBatchSize = 0;

    // increment the draw count
    this.renderer.drawCount++;
};


/**
 * Ends the batch and flushes
 *
 */
WebGLFastSpriteBatch.prototype.stop = function () {
    this.flush();
};

/**
 *
 */
WebGLFastSpriteBatch.prototype.start = function () {
    var gl = this.renderer.gl;

    // bind the main texture
    gl.activeTexture(gl.TEXTURE0);

    // bind the buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

    // set the projection
    var projection = this.renderer.projection;
    gl.uniform2f(this.shader.projectionVector, projection.x, projection.y);

    // set the matrix
    gl.uniformMatrix3fv(this.shader.uMatrix, false, this.matrix);

    // set the pointers
    var stride =  this.vertSize * 4;

    gl.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
    gl.vertexAttribPointer(this.shader.attributes.aPositionCoord, 2, gl.FLOAT, false, stride, 2 * 4);
    gl.vertexAttribPointer(this.shader.attributes.aScale, 2, gl.FLOAT, false, stride, 4 * 4);
    gl.vertexAttribPointer(this.shader.attributes.aRotation, 1, gl.FLOAT, false, stride, 6 * 4);
    gl.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, gl.FLOAT, false, stride, 7 * 4);
    gl.vertexAttribPointer(this.shader.attributes.aColor, 1, gl.FLOAT, false, stride, 9 * 4);
};

},{}],39:[function(require,module,exports){
var utils = require('../../../utils'),
    math = require('../../../math'),
    CONST = require('../../../const'),
    WebGLGraphicsData = require('./WebGLGraphicsData');

/**
 * A set of functions used by the webGL renderer to draw the primitive graphics data
 *
 * @namespace PIXI
 * @private
 */
var WebGLGraphics = module.exports = {};

/**
 * Renders the graphics object
 *
 * @static
 * @private
 * @param graphics {Graphics}
 * @param renderer {WebGLRenderer}
 */
WebGLGraphics.renderGraphics = function (graphics, renderer) {//projection, offset) {
    var gl = renderer.gl;

    var projection = renderer.projection,
        offset = renderer.offset,
        shader = renderer.shaderManager.primitiveShader,
        webGLData;

    if (graphics.dirty) {
        WebGLGraphics.updateGraphics(graphics, gl);
    }

    var webGL = graphics._webGL[gl.id];

    // This  could be speeded up for sure!

    for (var i = 0; i < webGL.data.length; i++) {
        if (webGL.data[i].mode === 1) {
            webGLData = webGL.data[i];

            renderer.stencilManager.pushStencil(graphics, webGLData, renderer);

            // render quad..
            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );

            renderer.stencilManager.popStencil(graphics, webGLData, renderer);
        }
        else {
            webGLData = webGL.data[i];


            renderer.shaderManager.setShader( shader );//activatePrimitiveShader();
            shader = renderer.shaderManager.primitiveShader;
            gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));

            gl.uniform1f(shader.flipY, 1);

            gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
            gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);

            gl.uniform3fv(shader.tintColor, utils.hex2rgb(graphics.tint));

            gl.uniform1f(shader.alpha, graphics.worldAlpha);


            gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);

            gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);
            gl.vertexAttribPointer(shader.aColor, 4, gl.FLOAT, false,4 * 6, 2 * 4);

            // set the index buffer!
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);
            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );
        }
    }
};

/**
 * Updates the graphics object
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object to update
 * @param gl {WebGLContext} the current WebGL drawing context
 */
WebGLGraphics.updateGraphics = function (graphics, gl) {
    // get the contexts graphics object
    var webGL = graphics._webGL[gl.id];

    // if the graphics object does not exist in the webGL context time to create it!
    if (!webGL) {
        webGL = graphics._webGL[gl.id] = {lastIndex:0, data:[], gl:gl};
    }

    // flag the graphics as not dirty as we are about to update it...
    graphics.dirty = false;

    var i;

    // if the user cleared the graphics object we will need to clear every object
    if (graphics.clearDirty) {
        graphics.clearDirty = false;

        // lop through and return all the webGLDatas to the object pool so than can be reused later on
        for (i = 0; i < webGL.data.length; i++) {
            var graphicsData = webGL.data[i];
            graphicsData.reset();
            WebGLGraphics.graphicsDataPool.push( graphicsData );
        }

        // clear the array and reset the index..
        webGL.data = [];
        webGL.lastIndex = 0;
    }

    var webGLData;

    // loop through the graphics datas and construct each one..
    // if the object is a complex fill then the new stencil buffer technique will be used
    // other wise graphics objects will be pushed into a batch..
    for (i = webGL.lastIndex; i < graphics.graphicsData.length; i++) {
        var data = graphics.graphicsData[i];

        if (data.type === CONST.SHAPES.POLY) {
            // need to add the points the the graphics object..
            data.points = data.shape.points.slice();
            if (data.shape.closed) {
                // close the poly if the value is true!
                if (data.points[0] !== data.points[data.points.length-2] || data.points[1] !== data.points[data.points.length-1]) {
                    data.points.push(data.points[0], data.points[1]);
                }
            }

            // MAKE SURE WE HAVE THE CORRECT TYPE..
            if (data.fill) {
                if (data.points.length >= 6) {
                    if (data.points.length < 6 * 2) {
                        webGLData = WebGLGraphics.switchMode(webGL, 0);

                        var canDrawUsingSimple = WebGLGraphics.buildPoly(data, webGLData);
                   //     console.log(canDrawUsingSimple);

                        if (!canDrawUsingSimple) {
                        //    console.log("<>>>")
                            webGLData = WebGLGraphics.switchMode(webGL, 1);
                            WebGLGraphics.buildComplexPoly(data, webGLData);
                        }

                    }
                    else {
                        webGLData = WebGLGraphics.switchMode(webGL, 1);
                        WebGLGraphics.buildComplexPoly(data, webGLData);
                    }
                }
            }

            if (data.lineWidth > 0) {
                webGLData = WebGLGraphics.switchMode(webGL, 0);
                WebGLGraphics.buildLine(data, webGLData);

            }
        }
        else {
            webGLData = WebGLGraphics.switchMode(webGL, 0);

            if (data.type === CONST.SHAPES.RECT) {
                WebGLGraphics.buildRectangle(data, webGLData);
            }
            else if (data.type === CONST.SHAPES.CIRC || data.type === CONST.SHAPES.ELIP) {
                WebGLGraphics.buildCircle(data, webGLData);
            }
            else if (data.type === CONST.SHAPES.RREC) {
                WebGLGraphics.buildRoundedRectangle(data, webGLData);
            }
        }

        webGL.lastIndex++;
    }

    // upload all the dirty data...
    for (i = 0; i < webGL.data.length; i++) {
        webGLData = webGL.data[i];

        if (webGLData.dirty) {
            webGLData.upload();
        }
    }
};

/**
 * @static
 * @private
 * @param webGL {WebGLContext}
 * @param type {number}
 */
WebGLGraphics.switchMode = function (webGL, type) {
    var webGLData;

    if (!webGL.data.length) {
        webGLData = WebGLGraphics.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
        webGLData.mode = type;
        webGL.data.push(webGLData);
    }
    else {
        webGLData = webGL.data[webGL.data.length-1];

        if (webGLData.mode !== type || type === 1) {
            webGLData = WebGLGraphics.graphicsDataPool.pop() || new WebGLGraphicsData(webGL.gl);
            webGLData.mode = type;
            webGL.data.push(webGLData);
        }
    }

    webGLData.dirty = true;

    return webGLData;
};

/**
 * Builds a rectangle to draw
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object}
 */
WebGLGraphics.buildRectangle = function (graphicsData, webGLData) {
    // --- //
    // need to convert points to a nice regular data
    //
    var rectData = graphicsData.shape;
    var x = rectData.x;
    var y = rectData.y;
    var width = rectData.width;
    var height = rectData.height;

    if (graphicsData.fill) {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vertPos = verts.length/6;

        // start
        verts.push(x, y);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y);
        verts.push(r, g, b, alpha);

        verts.push(x , y + height);
        verts.push(r, g, b, alpha);

        verts.push(x + width, y + height);
        verts.push(r, g, b, alpha);

        // insert 2 dead triangles..
        indices.push(vertPos, vertPos, vertPos+1, vertPos+2, vertPos+3, vertPos+3);
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = [x, y,
                  x + width, y,
                  x + width, y + height,
                  x, y + height,
                  x, y];


        WebGLGraphics.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a rounded rectangle to draw
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object}
 */
WebGLGraphics.buildRoundedRectangle = function (graphicsData, webGLData) {
    var rrectData = graphicsData.shape;
    var x = rrectData.x;
    var y = rrectData.y;
    var width = rrectData.width;
    var height = rrectData.height;

    var radius = rrectData.radius;

    var recPoints = [];
    recPoints.push(x, y + radius);
    recPoints = recPoints.concat(WebGLGraphics.quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height));
    recPoints = recPoints.concat(WebGLGraphics.quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius));
    recPoints = recPoints.concat(WebGLGraphics.quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y));
    recPoints = recPoints.concat(WebGLGraphics.quadraticBezierCurve(x + radius, y, x, y, x, y + radius));

    if (graphicsData.fill) {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        var triangles = utils.PolyK.Triangulate(recPoints);

        //

        var i = 0;
        for (i = 0; i < triangles.length; i+=3) {
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i] + vecPos);
            indices.push(triangles[i+1] + vecPos);
            indices.push(triangles[i+2] + vecPos);
            indices.push(triangles[i+2] + vecPos);
        }


        for (i = 0; i < recPoints.length; i++) {
            verts.push(recPoints[i], recPoints[++i], r, g, b, alpha);
        }
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = recPoints;

        WebGLGraphics.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * @static
 * @private
 * @param fromX {number} Origin point x
 * @param fromY {number} Origin point x
 * @param cpX {number} Control point x
 * @param cpY {number} Control point y
 * @param toX {number} Destination point x
 * @param toY {number} Destination point y
 * @return {number[]}
 */
WebGLGraphics.quadraticBezierCurve = function (fromX, fromY, cpX, cpY, toX, toY) {

    var xa,
        ya,
        xb,
        yb,
        x,
        y,
        n = 20,
        points = [];

    function getPt(n1 , n2, perc) {
        var diff = n2 - n1;

        return n1 + ( diff * perc );
    }

    var j = 0;
    for (var i = 0; i <= n; i++ ) {
        j = i / n;

        // The Green Line
        xa = getPt( fromX , cpX , j );
        ya = getPt( fromY , cpY , j );
        xb = getPt( cpX , toX , j );
        yb = getPt( cpY , toY , j );

        // The Black Dot
        x = getPt( xa , xb , j );
        y = getPt( ya , yb , j );

        points.push(x, y);
    }
    return points;
};

/**
 * Builds a circle to draw
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object to draw
 * @param webGLData {object}
 */
WebGLGraphics.buildCircle = function (graphicsData, webGLData) {
    // need to convert points to a nice regular data
    var circleData = graphicsData.shape;
    var x = circleData.x;
    var y = circleData.y;
    var width;
    var height;

    // TODO - bit hacky??
    if (graphicsData.type === CONST.SHAPES.CIRC) {
        width = circleData.radius;
        height = circleData.radius;
    }
    else {
        width = circleData.width;
        height = circleData.height;
    }

    var totalSegs = 40;
    var seg = (Math.PI * 2) / totalSegs ;

    var i = 0;

    if (graphicsData.fill) {
        var color = utils.hex2rgb(graphicsData.fillColor);
        var alpha = graphicsData.fillAlpha;

        var r = color[0] * alpha;
        var g = color[1] * alpha;
        var b = color[2] * alpha;

        var verts = webGLData.points;
        var indices = webGLData.indices;

        var vecPos = verts.length/6;

        indices.push(vecPos);

        for (i = 0; i < totalSegs + 1 ; i++) {
            verts.push(x,y, r, g, b, alpha);

            verts.push(x + Math.sin(seg * i) * width,
                       y + Math.cos(seg * i) * height,
                       r, g, b, alpha);

            indices.push(vecPos++, vecPos++);
        }

        indices.push(vecPos-1);
    }

    if (graphicsData.lineWidth) {
        var tempPoints = graphicsData.points;

        graphicsData.points = [];

        for (i = 0; i < totalSegs + 1; i++) {
            graphicsData.points.push(x + Math.sin(seg * i) * width,
                                     y + Math.cos(seg * i) * height);
        }

        WebGLGraphics.buildLine(graphicsData, webGLData);

        graphicsData.points = tempPoints;
    }
};

/**
 * Builds a line to draw
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object}
 */
WebGLGraphics.buildLine = function (graphicsData, webGLData) {
    // TODO OPTIMISE!
    var i = 0;
    var points = graphicsData.points;

    if (points.length === 0) {
        return;
    }

    // if the line width is an odd number add 0.5 to align to a whole pixel
    if (graphicsData.lineWidth%2) {
        for (i = 0; i < points.length; i++) {
            points[i] += 0.5;
        }
    }

    // get first and last point.. figure out the middle!
    var firstPoint = new math.Point(points[0], points[1]);
    var lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

    // if the first point is the last point - gonna have issues :)
    if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
        // need to clone as we are going to slightly modify the shape..
        points = points.slice();

        points.pop();
        points.pop();

        lastPoint = new math.Point(points[points.length - 2], points[points.length - 1]);

        var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) *0.5;
        var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) *0.5;

        points.unshift(midPointX, midPointY);
        points.push(midPointX, midPointY);
    }

    var verts = webGLData.points;
    var indices = webGLData.indices;
    var length = points.length / 2;
    var indexCount = points.length;
    var indexStart = verts.length/6;

    // DRAW the Line
    var width = graphicsData.lineWidth / 2;

    // sort color
    var color = utils.hex2rgb(graphicsData.lineColor);
    var alpha = graphicsData.lineAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var px, py, p1x, p1y, p2x, p2y, p3x, p3y;
    var perpx, perpy, perp2x, perp2y, perp3x, perp3y;
    var a1, b1, c1, a2, b2, c2;
    var denom, pdist, dist;

    p1x = points[0];
    p1y = points[1];

    p2x = points[2];
    p2y = points[3];

    perpx = -(p1y - p2y);
    perpy =  p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);

    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    // start
    verts.push(p1x - perpx , p1y - perpy,
                r, g, b, alpha);

    verts.push(p1x + perpx , p1y + perpy,
                r, g, b, alpha);

    for (i = 1; i < length-1; i++) {
        p1x = points[(i-1)*2];
        p1y = points[(i-1)*2 + 1];

        p2x = points[(i)*2];
        p2y = points[(i)*2 + 1];

        p3x = points[(i+1)*2];
        p3y = points[(i+1)*2 + 1];

        perpx = -(p1y - p2y);
        perpy = p1x - p2x;

        dist = Math.sqrt(perpx*perpx + perpy*perpy);
        perpx /= dist;
        perpy /= dist;
        perpx *= width;
        perpy *= width;

        perp2x = -(p2y - p3y);
        perp2y = p2x - p3x;

        dist = Math.sqrt(perp2x*perp2x + perp2y*perp2y);
        perp2x /= dist;
        perp2y /= dist;
        perp2x *= width;
        perp2y *= width;

        a1 = (-perpy + p1y) - (-perpy + p2y);
        b1 = (-perpx + p2x) - (-perpx + p1x);
        c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
        a2 = (-perp2y + p3y) - (-perp2y + p2y);
        b2 = (-perp2x + p2x) - (-perp2x + p3x);
        c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

        denom = a1*b2 - a2*b1;

        if (Math.abs(denom) < 0.1 ) {

            denom+=10.1;
            verts.push(p2x - perpx , p2y - perpy,
                r, g, b, alpha);

            verts.push(p2x + perpx , p2y + perpy,
                r, g, b, alpha);

            continue;
        }

        px = (b1*c2 - b2*c1)/denom;
        py = (a2*c1 - a1*c2)/denom;


        pdist = (px -p2x) * (px -p2x) + (py -p2y) + (py -p2y);


        if (pdist > 140 * 140) {
            perp3x = perpx - perp2x;
            perp3y = perpy - perp2y;

            dist = Math.sqrt(perp3x*perp3x + perp3y*perp3y);
            perp3x /= dist;
            perp3y /= dist;
            perp3x *= width;
            perp3y *= width;

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x + perp3x, p2y +perp3y);
            verts.push(r, g, b, alpha);

            verts.push(p2x - perp3x, p2y -perp3y);
            verts.push(r, g, b, alpha);

            indexCount++;
        }
        else {

            verts.push(px , py);
            verts.push(r, g, b, alpha);

            verts.push(p2x - (px-p2x), p2y - (py - p2y));
            verts.push(r, g, b, alpha);
        }
    }

    p1x = points[(length-2)*2];
    p1y = points[(length-2)*2 + 1];

    p2x = points[(length-1)*2];
    p2y = points[(length-1)*2 + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt(perpx*perpx + perpy*perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    verts.push(p2x - perpx , p2y - perpy);
    verts.push(r, g, b, alpha);

    verts.push(p2x + perpx , p2y + perpy);
    verts.push(r, g, b, alpha);

    indices.push(indexStart);

    for (i = 0; i < indexCount; i++) {
        indices.push(indexStart++);
    }

    indices.push(indexStart-1);
};

/**
 * Builds a complex polygon to draw
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object}
 */
WebGLGraphics.buildComplexPoly = function (graphicsData, webGLData) {
    //TODO - no need to copy this as it gets turned into a FLoat32Array anyways..
    var points = graphicsData.points.slice();

    if (points.length < 6) {
        return;
    }

    // get first and last point.. figure out the middle!
    var indices = webGLData.indices;
    webGLData.points = points;
    webGLData.alpha = graphicsData.fillAlpha;
    webGLData.color = utils.hex2rgb(graphicsData.fillColor);

    // calclate the bounds..
    var minX = Infinity;
    var maxX = -Infinity;

    var minY = Infinity;
    var maxY = -Infinity;

    var x,y;

    // get size..
    for (var i = 0; i < points.length; i+=2) {
        x = points[i];
        y = points[i+1];

        minX = x < minX ? x : minX;
        maxX = x > maxX ? x : maxX;

        minY = y < minY ? y : minY;
        maxY = y > maxY ? y : maxY;
    }

    // add a quad to the end cos there is no point making another buffer!
    points.push(minX, minY,
                maxX, minY,
                maxX, maxY,
                minX, maxY);

    // push a quad onto the end..

    //TODO - this aint needed!
    var length = points.length / 2;
    for (i = 0; i < length; i++) {
        indices.push( i );
    }

};

/**
 * Builds a polygon to draw
 *
 * @static
 * @private
 * @param graphicsData {Graphics} The graphics object containing all the necessary properties
 * @param webGLData {object}
 */
WebGLGraphics.buildPoly = function (graphicsData, webGLData) {
    var points = graphicsData.points;

    if (points.length < 6) {
        return;
    }
    // get first and last point.. figure out the middle!
    var verts = webGLData.points;
    var indices = webGLData.indices;

    var length = points.length / 2;

    // sort color
    var color = utils.hex2rgb(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var triangles = utils.PolyK.Triangulate(points);

    if (!triangles) {
        return false;
    }

    var vertPos = verts.length / 6;

    var i = 0;

    for (i = 0; i < triangles.length; i+=3) {
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i] + vertPos);
        indices.push(triangles[i+1] + vertPos);
        indices.push(triangles[i+2] +vertPos);
        indices.push(triangles[i+2] + vertPos);
    }

    for (i = 0; i < length; i++) {
        verts.push(points[i * 2], points[i * 2 + 1],
                   r, g, b, alpha);
    }

    return true;
};

WebGLGraphics.graphicsDataPool = [];

},{"../../../const":4,"../../../math":12,"../../../utils":50,"./WebGLGraphicsData":40}],40:[function(require,module,exports){
/**
 * @class
 * @private
 */
function WebGLGraphicsData(gl) {
    this.gl = gl;

    //TODO does this need to be split before uploding??
    this.color = [0, 0, 0]; // color split!
    this.points = [];
    this.indices = [];
    this.buffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();
    this.mode = 1;
    this.alpha = 1;
    this.dirty = true;
}

WebGLGraphicsData.prototype.constructor = WebGLGraphicsData;
module.exports = WebGLGraphicsData;

/**
 *
 */
WebGLGraphicsData.prototype.reset = function () {
    this.points.length = 0;
    this.indices.length = 0;
};

/**
 *
 */
WebGLGraphicsData.prototype.upload = function () {
    var gl = this.gl;

//    this.lastIndex = graphics.graphicsData.length;
    this.glPoints = new Float32Array(this.points);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.glPoints, gl.STATIC_DRAW);

    this.glIndicies = new Uint16Array(this.indices);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.glIndicies, gl.STATIC_DRAW);

    this.dirty = false;
};

},{}],41:[function(require,module,exports){
var TextureUvs = require('../../../textures/TextureUvs'),
    Shader = require('../shaders/Shader');

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's WebGLSpriteBatch:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/WebGLSpriteBatch.java
 */

/**
 *
 * @class
 * @private
 * @namespace PIXI
 * @param renderer {WebGLRenderer} The renderer this sprite batch works for.
 */
function WebGLSpriteBatch(renderer) {
    /**
     *
     *
     * @member {WebGLRenderer}
     */
    this.renderer = renderer;

    /**
     *
     *
     * @member {number}
     */
    this.vertSize = 5;

    /**
     * The number of images in the SpriteBatch before it flushes.
     *
     * @member {number}
     */
    this.size = 2000;//Math.pow(2, 16) /  this.vertSize;

    // the total number of bytes in our batch
    var numVerts = this.size * 4 * 4 * this.vertSize;
    // the total number of indices in our batch
    var numIndices = this.size * 6;

    /**
     * Holds the vertices
     *
     * @member {ArrayBuffer}
     */
    this.vertices = new ArrayBuffer(numVerts);

    /**
     * View on the vertices as a Float32Array
     *
     * @member {Float32Array}
     */
    this.positions = new Float32Array(this.vertices);

    /**
     * View on the vertices as a Uint32Array
     *
     * @member {Uint32Array}
     */
    this.colors = new Uint32Array(this.vertices);

    /**
     * Holds the indices
     *
     * @member {Uint16Array}
     */
    this.indices = new Uint16Array(numIndices);

    /**
     *
     *
     * @member {number}
     */
    this.lastIndexCount = 0;

    for (var i=0, j=0; i < numIndices; i += 6, j += 4) {
        this.indices[i + 0] = j + 0;
        this.indices[i + 1] = j + 1;
        this.indices[i + 2] = j + 2;
        this.indices[i + 3] = j + 0;
        this.indices[i + 4] = j + 2;
        this.indices[i + 5] = j + 3;
    }

    /**
     *
     *
     * @member {boolean}
     */
    this.drawing = false;

    /**
     *
     *
     * @member {number}
     */
    this.currentBatchSize = 0;

    /**
     *
     *
     * @member {BaseTexture}
     */
    this.currentBaseTexture = null;

    /**
     *
     *
     * @member {boolean}
     */
    this.dirty = true;

    /**
     *
     *
     * @member {Array}
     */
    this.textures = [];

    /**
     *
     *
     * @member {Array}
     */
    this.blendModes = [];

    /**
     *
     *
     * @member {Array}
     */
    this.shaders = [];

    /**
     *
     *
     * @member {Array}
     */
    this.sprites = [];

    /**
     * The default shader that is used if a sprite doesn't have a more specific one.
     *
     * @member {Shader}
     */
    this.shader = null;

    // listen for context and update necessary buffers
    var self = this;
    this.renderer.on('context', function () {
        self.setupContext();
    });
}

WebGLSpriteBatch.prototype.constructor = WebGLSpriteBatch;
module.exports = WebGLSpriteBatch;

/**
 * @param gl {WebGLContext} the current WebGL drawing context
 */
WebGLSpriteBatch.prototype.setupContext = function () {
    var gl = this.renderer.gl;

    // setup default shader
    this.shader = new Shader(gl);

    // create a couple of buffers
    this.vertexBuffer = gl.createBuffer();
    this.indexBuffer = gl.createBuffer();

    // 65535 is max index, so 65535 / 6 = 10922.

    //upload the index data
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

    this.currentBlendMode = 99999;
};

/**
 *
 */
WebGLSpriteBatch.prototype.begin = function () {
    // this.shader = this.renderer.shaderManager.defaultShader;

    this.start();
};

/**
 */
WebGLSpriteBatch.prototype.end = function () {
    this.flush();
};

/**
 * @param sprite {Sprite} the sprite to render when using this spritebatch
 */
WebGLSpriteBatch.prototype.render = function (sprite) {
    var texture = sprite.texture;

    //TODO set blend modes..
    // check texture..
    if (this.currentBatchSize >= this.size) {
        this.flush();
        this.currentBaseTexture = texture.baseTexture;
    }

    // get the uvs for the texture
    var uvs = texture._uvs;

    // if the uvs have not updated then no point rendering just yet!
    if (!uvs) {
        return;
    }

    // TODO trim??
    var aX = sprite.anchor.x;
    var aY = sprite.anchor.y;

    var w0, w1, h0, h1;

    if (texture.trim) {
        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..
        var trim = texture.trim;

        w1 = trim.x - aX * trim.width;
        w0 = w1 + texture.crop.width;

        h1 = trim.y - aY * trim.height;
        h0 = h1 + texture.crop.height;

    }
    else {
        w0 = (texture.frame.width ) * (1-aX);
        w1 = (texture.frame.width ) * -aX;

        h0 = texture.frame.height * (1-aY);
        h1 = texture.frame.height * -aY;
    }

    var index = this.currentBatchSize * 4 * this.vertSize;

    var resolution = texture.baseTexture.resolution;

    var worldTransform = sprite.worldTransform;

    var a = worldTransform.a / resolution;
    var b = worldTransform.b / resolution;
    var c = worldTransform.c / resolution;
    var d = worldTransform.d / resolution;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var colors = this.colors;
    var positions = this.positions;

    if (this.renderer.roundPixels) {
        // xy
        positions[index] = a * w1 + c * h1 + tx | 0;
        positions[index+1] = d * h1 + b * w1 + ty | 0;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx | 0;
        positions[index+6] = d * h1 + b * w0 + ty | 0;

         // xy
        positions[index+10] = a * w0 + c * h0 + tx | 0;
        positions[index+11] = d * h0 + b * w0 + ty | 0;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx | 0;
        positions[index+16] = d * h0 + b * w1 + ty | 0;
    }
    else {
        // xy
        positions[index] = a * w1 + c * h1 + tx;
        positions[index+1] = d * h1 + b * w1 + ty;

        // xy
        positions[index+5] = a * w0 + c * h1 + tx;
        positions[index+6] = d * h1 + b * w0 + ty;

         // xy
        positions[index+10] = a * w0 + c * h0 + tx;
        positions[index+11] = d * h0 + b * w0 + ty;

        // xy
        positions[index+15] = a * w1 + c * h0 + tx;
        positions[index+16] = d * h0 + b * w1 + ty;
    }

    // uv
    positions[index+2] = uvs.x0;
    positions[index+3] = uvs.y0;

    // uv
    positions[index+7] = uvs.x1;
    positions[index+8] = uvs.y1;

     // uv
    positions[index+12] = uvs.x2;
    positions[index+13] = uvs.y2;

    // uv
    positions[index+17] = uvs.x3;
    positions[index+18] = uvs.y3;

    // color and alpha
    var tint = sprite.tint;
    colors[index+4] = colors[index+9] = colors[index+14] = colors[index+19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);

    // increment the batchsize
    this.sprites[this.currentBatchSize++] = sprite;


};

/**
 * Renders a TilingSprite using the spriteBatch.
 *
 * @param sprite {TilingSprite} the tilingSprite to render
 */
WebGLSpriteBatch.prototype.renderTilingSprite = function (tilingSprite) {
    var texture = tilingSprite.tilingTexture;

    // check texture..
    if (this.currentBatchSize >= this.size) {
        //return;
        this.flush();
        this.currentBaseTexture = texture.baseTexture;
    }

    // set the textures uvs temporarily
    // TODO create a separate texture so that we can tile part of a texture

    if (!tilingSprite._uvs) {
        tilingSprite._uvs = new TextureUvs();
    }

    var uvs = tilingSprite._uvs;

    tilingSprite.tilePosition.x %= texture.baseTexture.width * tilingSprite.tileScaleOffset.x;
    tilingSprite.tilePosition.y %= texture.baseTexture.height * tilingSprite.tileScaleOffset.y;

    var offsetX =  tilingSprite.tilePosition.x/(texture.baseTexture.width*tilingSprite.tileScaleOffset.x);
    var offsetY =  tilingSprite.tilePosition.y/(texture.baseTexture.height*tilingSprite.tileScaleOffset.y);

    var scaleX =  (tilingSprite.width / texture.baseTexture.width)  / (tilingSprite.tileScale.x * tilingSprite.tileScaleOffset.x);
    var scaleY =  (tilingSprite.height / texture.baseTexture.height) / (tilingSprite.tileScale.y * tilingSprite.tileScaleOffset.y);

    uvs.x0 = 0 - offsetX;
    uvs.y0 = 0 - offsetY;

    uvs.x1 = (1 * scaleX) - offsetX;
    uvs.y1 = 0 - offsetY;

    uvs.x2 = (1 * scaleX) - offsetX;
    uvs.y2 = (1 * scaleY) - offsetY;

    uvs.x3 = 0 - offsetX;
    uvs.y3 = (1 * scaleY) - offsetY;

    // get the tilingSprites current alpha and tint and combining them into a single color
    var tint = tilingSprite.tint;
    var color = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (tilingSprite.alpha * 255 << 24);

    var positions = this.positions;
    var colors = this.colors;

    var width = tilingSprite.width;
    var height = tilingSprite.height;

    // TODO trim??
    var aX = tilingSprite.anchor.x;
    var aY = tilingSprite.anchor.y;
    var w0 = width * (1-aX);
    var w1 = width * -aX;

    var h0 = height * (1-aY);
    var h1 = height * -aY;

    var index = this.currentBatchSize * 4 * this.vertSize;

    var resolution = texture.baseTexture.resolution;

    var worldTransform = tilingSprite.worldTransform;

    var a = worldTransform.a / resolution;//[0];
    var b = worldTransform.b / resolution;//[3];
    var c = worldTransform.c / resolution;//[1];
    var d = worldTransform.d / resolution;//[4];
    var tx = worldTransform.tx;//[2];
    var ty = worldTransform.ty;//[5];

    // xy
    positions[index++] = a * w1 + c * h1 + tx;
    positions[index++] = d * h1 + b * w1 + ty;
    // uv
    positions[index++] = uvs.x0;
    positions[index++] = uvs.y0;
    // color
    colors[index++] = color;

    // xy
    positions[index++] = (a * w0 + c * h1 + tx);
    positions[index++] = d * h1 + b * w0 + ty;
    // uv
    positions[index++] = uvs.x1;
    positions[index++] = uvs.y1;
    // color
    colors[index++] = color;

    // xy
    positions[index++] = a * w0 + c * h0 + tx;
    positions[index++] = d * h0 + b * w0 + ty;
    // uv
    positions[index++] = uvs.x2;
    positions[index++] = uvs.y2;
    // color
    colors[index++] = color;

    // xy
    positions[index++] = a * w1 + c * h0 + tx;
    positions[index++] = d * h0 + b * w1 + ty;
    // uv
    positions[index++] = uvs.x3;
    positions[index++] = uvs.y3;
    // color
    colors[index++] = color;

    // increment the batchsize
    this.sprites[this.currentBatchSize++] = tilingSprite;
};

/**
 * Renders the content and empties the current batch.
 *
 */
WebGLSpriteBatch.prototype.flush = function () {
    // If the batch is length 0 then return as there is nothing to draw
    if (this.currentBatchSize === 0) {
        return;
    }

    var gl = this.renderer.gl;
    var shader;

    if (this.dirty) {
        this.dirty = false;
        // bind the main texture
        gl.activeTexture(gl.TEXTURE0);

        // bind the buffers
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // this is the same for each shader?
        var stride =  this.vertSize * 4;
        gl.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, gl.FLOAT, false, stride, 0);
        gl.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);

        // color attributes will be interpreted as unsigned bytes and normalized
        gl.vertexAttribPointer(this.shader.attributes.aColor, 4, gl.UNSIGNED_BYTE, true, stride, 4 * 4);
    }

    // upload the verts to the buffer
    if (this.currentBatchSize > ( this.size * 0.5 ) ) {
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
    }
    else {
        var view = this.positions.subarray(0, this.currentBatchSize * 4 * this.vertSize);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
    }

    var nextTexture, nextBlendMode, nextShader;
    var batchSize = 0;
    var start = 0;

    var currentBaseTexture = null;
    var currentBlendMode = this.renderer.blendModeManager.currentBlendMode;
    var currentShader = null;

    var blendSwap = false;
    var shaderSwap = false;
    var sprite;

    for (var i = 0, j = this.currentBatchSize; i < j; i++) {

        sprite = this.sprites[i];

        nextTexture = sprite.texture.baseTexture;
        nextBlendMode = sprite.blendMode;
        nextShader = sprite.shader || this.shader;

        blendSwap = currentBlendMode !== nextBlendMode;
        shaderSwap = currentShader !== nextShader; // should I use uuidS???

        if (currentBaseTexture !== nextTexture || blendSwap || shaderSwap) {
            this.renderBatch(currentBaseTexture, batchSize, start);

            start = i;
            batchSize = 0;
            currentBaseTexture = nextTexture;

            if (blendSwap) {
                currentBlendMode = nextBlendMode;
                this.renderer.blendModeManager.setBlendMode( currentBlendMode );
            }

            if (shaderSwap) {
                currentShader = nextShader;

                shader = currentShader.shaders ? currentShader.shaders[gl.id] : currentShader;

                if (!shader) {
                    shader = new Shader(gl, null, currentShader.fragmentSrc, currentShader.uniforms);
                    currentShader.shaders[gl.id] = shader;
                }

                // set shader function???
                this.renderer.shaderManager.setShader(shader);

                if (shader.dirty) {
                    shader.syncUniforms();
                }

                // both thease only need to be set if they are changing..
                // set the projection
                var projection = this.renderer.projection;
                gl.uniform2f(shader.uniforms.projectionVector._location, projection.x, projection.y);

                // TODO - this is temprorary!
                var offsetVector = this.renderer.offset;
                gl.uniform2f(shader.uniforms.offsetVector._location, offsetVector.x, offsetVector.y);

                // set the pointers
            }
        }

        batchSize++;
    }

    this.renderBatch(currentBaseTexture, batchSize, start);

    // then reset the batch!
    this.currentBatchSize = 0;
};

/**
 * @param texture {Texture}
 * @param size {number}
 * @param startIndex {number}
 */
WebGLSpriteBatch.prototype.renderBatch = function (texture, size, startIndex) {
    if (size === 0) {
        return;
    }

    var gl = this.renderer.gl;

    if (!texture._glTextures[gl.id]) {
        this.renderer.updateTexture(texture);
    }
    else {
        // bind the current texture
        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);
    }

    // now draw those suckas!
    gl.drawElements(gl.TRIANGLES, size * 6, gl.UNSIGNED_SHORT, startIndex * 6 * 2);

    // increment the draw count
    this.renderer.drawCount++;
};

/**
 *
 */
WebGLSpriteBatch.prototype.stop = function () {
    this.flush();
    this.dirty = true;
};

/**
 *
 */
WebGLSpriteBatch.prototype.start = function () {
    this.dirty = true;
};

/**
 * Destroys the SpriteBatch.
 *
 */
WebGLSpriteBatch.prototype.destroy = function () {
    this.renderer.gl.deleteBuffer(this.vertexBuffer);
    this.renderer.gl.deleteBuffer(this.indexBuffer);

    this.vertices = null;
    this.indices = null;

    this.vertexBuffer = null;
    this.indexBuffer = null;

    this.currentBaseTexture = null;

    this.renderer = null;
};

},{"../../../textures/TextureUvs":45,"../shaders/Shader":35}],42:[function(require,module,exports){
var utils = require('../utils'),
    CONST = require('../const');

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param source {Image|Canvas} the source object of the texture.
 * @param [scaleMode=scaleModes.DEFAULT] {number} See {@link scaleModes} for possible values
 */
function BaseTexture(source, scaleMode) {
    this.uuid = utils.uuid();

    /**
     * The Resolution of the texture.
     *
     * @member {number}
     */
    this.resolution = 1;

    /**
     * The width of the base texture set when the image has loaded
     *
     * @member {number}
     * @readOnly
     */
    this.width = 100;

    /**
     * The height of the base texture set when the image has loaded
     *
     * @member {number}
     * @readOnly
     */
    this.height = 100;

    /**
     * The scale mode to apply when scaling this texture
     *
     * @member {{number}}
     * @default scaleModes.LINEAR
     */
    this.scaleMode = scaleMode || CONST.scaleModes.DEFAULT;

    /**
     * Set to true once the base texture has successfully loaded.
     *
     * This is never true if the underlying source fails to load or has no texture data.
     *
     * @member {boolean}
     * @readOnly
     */
    this.hasLoaded = false;

    /**
     * Set to true if the source is currently loading.
     *
     * If an Image source is loading the 'loaded' or 'error' event will be
     * dispatched when the operation ends. An underyling source that is
     * immediately-available bypasses loading entirely.
     *
     * @member {boolean}
     * @readonly
     */
    this.isLoading = false;

    /**
     * The image source that is used to create the texture.
     *
     * TODO: Make this a setter that calls loadSource();
     *
     * @member {Image|Canvas}
     * @readonly
     */
    this.source = null; // set in loadSource, if at all

    /**
     * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
     *
     * @member {boolean}
     * @default true
     */
    this.premultipliedAlpha = true;

    /**
     * @member {string}
     */
    this.imageUrl = null;

    /**
     * @member {boolean}
     * @private
     */
    this._powerOf2 = false;

    // used for webGL

    /**
     *
     * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used
     * Also the texture must be a power of two size to work
     *
     * @member {boolean}
     */
    this.mipmap = false;

    /**
     * A map of renderer IDs to webgl textures
     *
     * @member {object<number, WebGLTexture>}
     * @private
     */
    this._glTextures = {};

    /**
     * Does the texture on the GPU need to be updated?
     *
     * @member {boolean}
     * @private
     */
    this._needsUpdate = false;

    // if no source passed don't try to load
    if (source) {
        this.loadSource(source);
    }

    /**
     * Fired when a not-immediately-available source finishes loading.
     *
     * @event loaded
     * @protected
     */

    /**
     * Fired when a not-immediately-available source fails to load.
     *
     * @event error
     * @protected
     */
}

BaseTexture.prototype.constructor = BaseTexture;
module.exports = BaseTexture;

utils.eventTarget.mixin(BaseTexture.prototype);

Object.defineProperties(BaseTexture.prototype, {
    needsUpdate: {
        get: function () {
            return this._needsUpdate;
        },
        set: function (val) {
            this._needsUpdate = val;

            if (val) {
                this.emit('update', this);
            }
        }
    }
});

/**
 * Load a source.
 *
 * If the source is not-immediately-available, such as an image that needs to be
 * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
 * and `hasLoaded` will remain false after this call.
 *
 * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
 *
 *     if (texture.hasLoaded) {
 *        // texture ready for use
 *     } else if (texture.isLoading) {
 *        // listen to 'loaded' and/or 'error' events on texture
 *     } else {
 *        // not loading, not going to load UNLESS the source is reloaded
 *        // (it may still make sense to listen to the events)
 *     }
 *
 * @protected
 * @param source {Image|Canvas} the source object of the texture.
 */
BaseTexture.prototype.loadSource = function (source) {
    var wasLoading = this.isLoading;
    this.hasLoaded = false;
    this.isLoading = false;

    if (wasLoading && this.source) {
        this.source.onload = null;
        this.source.onerror = null;
    }

    this.source = source;

    // Apply source if loaded. Otherwise setup appropriate loading monitors.
    if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {
        this._sourceLoaded();
    }
    else  if(!source.getContext) {
        // Image fail / not ready
        this.isLoading = true;

        var scope = this;

        source.onload = function () {
            source.onload = null;
            source.onerror = null;

            if(!scope.isLoading) {
                return;
            }

            scope.isLoading = false;
            scope._sourceLoaded();

            scope.emit('loaded', scope);
        };

        source.onerror = function () {
            source.onload = null;
            source.onerror = null;

            if(!scope.isLoading) {
                return;
            }

            scope.isLoading = false;
            scope.emit('error', scope);
        };

        // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
        //   "The value of `complete` can thus change while a script is executing."
        // So complete needs to be re-checked after the callbacks have been added..
        if (source.complete) {
            this.isLoading = false;

            // ..and if we're complete now, no need for callbacks
            source.onload = null;
            source.onerror = null;

            if (source.width && source.height) {
                this._sourceLoaded();

                // If any previous subscribers possible
                if (wasLoading) {
                    this.emit('loaded', this);
                }
            }
            else {
                // If any previous subscribers possible
                if (wasLoading) {
                    this.emit('error', this);
                }
            }
        }
    }
};

/**
 * Used internally to update the width, height, and some other tracking vars once
 * a source has successfully loaded.
 *
 * @private
 */
BaseTexture.prototype._sourceLoaded = function () {
    this.hasLoaded = true;

    this.width = this.source.naturalWidth || this.source.width;
    this.height = this.source.naturalHeight || this.source.height;

    this.needsUpdate = true;
};

/**
 * Destroys this base texture
 *
 */
BaseTexture.prototype.destroy = function () {
    if (this.imageUrl) {
        delete utils.BaseTextureCache[this.imageUrl];
        delete utils.TextureCache[this.imageUrl];
        this.imageUrl = null;
        if (!navigator.isCocoonJS) {
            this.source.src = '';
        }
    }
    else if (this.source && this.source._pixiId) {
        delete utils.BaseTextureCache[this.source._pixiId];
    }
    this.source = null;

    this.dispose();
};

/**
 * Frees the texture from WebGL memory without destroying this texture object.
 * This means you can still use the texture later which will upload it to GPU
 * memory again.
 *
 */
BaseTexture.prototype.dispose = function () {
    this.emit('dispose', this);
};

/**
 * Changes the source image of the texture.
 * The original source must be an Image element.
 *
 * @param newSrc {string} the path of the image
 */
BaseTexture.prototype.updateSourceImage = function (newSrc) {
    this.source.src = newSrc;
    this.loadSource(this.source);
};

/**
 * Helper function that creates a base texture from the given image url.
 * If the image is not in the base texture cache it will be created and loaded.
 *
 * @static
 * @param imageUrl {string} The image url of the texture
 * @param [crossorigin=(auto)] {boolean} Should use anonymouse CORS? Defaults to true if the URL is not a data-URI.
 * @param [scaleMode=scaleModes.DEFAULT] {number} See {@link scaleModes} for possible values
 * @return BaseTexture
 */
BaseTexture.fromImage = function (imageUrl, crossorigin, scaleMode) {
    var baseTexture = utils.BaseTextureCache[imageUrl];

    if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
        crossorigin = true;
    }

    if (!baseTexture) {
        // new Image() breaks tex loading in some versions of Chrome.
        // See https://code.google.com/p/chromium/issues/detail?id=238071
        var image = new Image();//document.createElement('img');
        if (crossorigin) {
            image.crossOrigin = '';
        }

        image.src = imageUrl;
        baseTexture = new BaseTexture(image, scaleMode);
        baseTexture.imageUrl = imageUrl;
        utils.BaseTextureCache[imageUrl] = baseTexture;

        // if there is an @2x at the end of the url we are going to assume its a highres image
        if ( imageUrl.indexOf(CONST.RETINA_PREFIX + '.') !== -1) {
            baseTexture.resolution = 2;
        }
    }

    return baseTexture;
};

/**
 * Helper function that creates a base texture from the given canvas element.
 *
 * @static
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return BaseTexture
 */
BaseTexture.fromCanvas = function (canvas, scaleMode) {
    if (!canvas._pixiId) {
        canvas._pixiId = 'canvas_' + utils.uuid();
    }

    var baseTexture = utils.BaseTextureCache[canvas._pixiId];

    if (!baseTexture) {
        baseTexture = new BaseTexture(canvas, scaleMode);
        utils.BaseTextureCache[canvas._pixiId] = baseTexture;
    }

    return baseTexture;
};

},{"../const":4,"../utils":50}],43:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    Texture = require('./Texture'),
    FilterTexture = require('../renderers/webgl/utils/FilterTexture'),
    CanvasBuffer = require('../renderers/canvas/utils/CanvasBuffer'),
    math = require('../math'),
    CONST = require('../const');

/**
 * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * var renderTexture = new PIXI.RenderTexture(800, 600);
 * var sprite = PIXI.Sprite.fromImage("spinObj_01.png");
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderTexture.render(sprite);
 * ```
 *
 * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual
 * position a DisplayObjectContainer should be used:
 *
 * ```js
 * var doc = new DisplayObjectContainer();
 *
 * doc.addChild(sprite);
 *
 * renderTexture.render(doc);  // Renders to center of renderTexture
 * ```
 *
 * @class
 * @extends Texture
 * @namespace PIXI
 * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used for this RenderTexture
 * @param [width=100] {number} The width of the render texture
 * @param [height=100] {number} The height of the render texture
 * @param [scaleMode] {number} See {@link scaleModes} for possible values
 * @param [resolution=1] {number} The resolution of the texture being generated
 */
function RenderTexture(renderer, width, height, scaleMode, resolution) {
    if (!renderer) {
        throw new Error('Unable to create RenderTexture, you must pass a renderer into the constructor.');
    }

    /**
     * The with of the render texture
     *
     * @member {number}
     */
    this.width = width || 100;

    /**
     * The height of the render texture
     *
     * @member {number}
     */
    this.height = height || 100;

    /**
     * The Resolution of the texture.
     *
     * @member {number}
     */
    this.resolution = resolution || 1;

    /**
     * The framing rectangle of the render texture
     *
     * @member {Rectangle}
     */
    this.frame = new math.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Rectangle}
     */
    this.crop = new math.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);

    /**
     * Draw/render the given DisplayObject onto the texture.
     *
     * The displayObject and descendents are transformed during this operation.
     * If `restoreWorldTransform` is true then the transformations will be restored before the
     * method returns. Otherwise it is up to the calling code to correctly use or reset
     * the transformed display objects.
     *
     * The display object is always rendered with a worldAlpha value of 1.
     *
     * @method
     * @param displayObject {DisplayObject} The display object to render this texture on
     * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
     * @param [clear=false] {boolean} If true the texture will be cleared before the displayObject is drawn
     * @param [restoreWorldTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
     *  transformations will be restored. Not restoring this information will be a little faster.
     */
    this.render = null;

    /**
     * The base texture object that this texture uses
     *
     * @member {BaseTexture}
     */
    this.baseTexture = new BaseTexture();
    this.baseTexture.width = this.width * this.resolution;
    this.baseTexture.height = this.height * this.resolution;
    this.baseTexture._glTextures = [];
    this.baseTexture.resolution = this.resolution;

    this.baseTexture.scaleMode = scaleMode || CONST.scaleModes.DEFAULT;

    this.baseTexture.hasLoaded = true;

    Texture.call(this,
        this.baseTexture,
        new math.Rectangle(0, 0, this.width, this.height)
    );

    /**
     * The renderer this RenderTexture uses. A RenderTexture can only belong to one renderer at the moment if its webGL.
     *
     * @member {CanvasRenderer|WebGLRenderer}
     */
    this.renderer = renderer;

    if (this.renderer.type === CONST.WEBGL_RENDERER) {
        var gl = this.renderer.gl;

        this.textureBuffer = new FilterTexture(gl, this.width * this.resolution, this.height * this.resolution, this.baseTexture.scaleMode);
        this.baseTexture._glTextures[gl.id] =  this.textureBuffer.texture;

        this.render = this.renderWebGL;
        this.projection = new math.Point(this.width*0.5, -this.height*0.5);
    }
    else {
        this.render = this.renderCanvas;
        this.textureBuffer = new CanvasBuffer(this.width* this.resolution, this.height* this.resolution);
        this.baseTexture.source = this.textureBuffer.canvas;
    }

    /**
     * @member {boolean}
     */
    this.valid = true;

    this._updateUvs();
}

RenderTexture.prototype = Object.create(Texture.prototype);
RenderTexture.prototype.constructor = RenderTexture;
module.exports = RenderTexture;

/**
 * Resizes the RenderTexture.
 *
 * @param width {number} The width to resize to.
 * @param height {number} The height to resize to.
 * @param updateBase {boolean} Should the baseTexture.width and height values be resized as well?
 */
RenderTexture.prototype.resize = function (width, height, updateBase) {
    if (width === this.width && height === this.height) {
        return;
    }

    this.valid = (width > 0 && height > 0);

    this.width = this.frame.width = this.crop.width = width;
    this.height =  this.frame.height = this.crop.height = height;

    if (updateBase) {
        this.baseTexture.width = this.width;
        this.baseTexture.height = this.height;
    }

    if (this.renderer.type === CONST.WEBGL_RENDERER) {
        this.projection.x = this.width / 2;
        this.projection.y = -this.height / 2;
    }

    if (!this.valid) {
        return;
    }

    this.textureBuffer.resize(this.width * this.resolution, this.height * this.resolution);
};

/**
 * Clears the RenderTexture.
 *
 */
RenderTexture.prototype.clear = function () {
    if (!this.valid) {
        return;
    }

    if (this.renderer.type === CONST.WEBGL_RENDERER) {
        this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
    }

    this.textureBuffer.clear();
};

/**
 * Internal method assigned to the `render` property if using a CanvasRenderer.
 *
 * @private
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear=false] {boolean} If true the texture will be cleared before the displayObject is drawn
 * @param [restoreWorldTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
 *  transformations will be restored. Not restoring this information will be a little faster.
 */
RenderTexture.prototype.renderWebGL = function (displayObject, matrix, clear, restoreWorldTransform) {
    if (!this.valid) {
        return;
    }

    if (typeof restoreWorldTransform === 'undefined') {
        restoreWorldTransform = true;
    }

    var tempAlpha,
        tempTransform;

    if (restoreWorldTransform) {
        tempAlpha = displayObject.worldAlpha;
        tempTransform = displayObject.worldTransform.toArray();
    }

    //TOOD replace position with matrix..

    //Lets create a nice matrix to apply to our display object. Frame buffers come in upside down so we need to flip the matrix
    var wt = displayObject.worldTransform;

    wt.identity();
    wt.translate(0, this.projection.y * 2);

    if (matrix) {
        wt.append(matrix);
    }

    wt.scale(1,-1);

    // setWorld Alpha to ensure that the object is renderer at full opacity
    displayObject.worldAlpha = 1;

    // Time to update all the children of the displayObject with the new matrix..
    var children = displayObject.children;
    var i, j;

    for (i = 0, j = children.length; i < j; ++i) {
        children[i].updateTransform();
    }

    // time for the webGL fun stuff!
    var gl = this.renderer.gl;

    gl.viewport(0, 0, this.width * this.resolution, this.height * this.resolution);

    gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer );

    if (clear) {
        this.textureBuffer.clear();
    }

    this.renderer.spriteBatch.dirty = true;

    this.renderer.renderDisplayObject(displayObject, this.projection, this.textureBuffer.frameBuffer);

    this.renderer.spriteBatch.dirty = true;

    if (restoreWorldTransform) {
        displayObject.worldAlpha = tempAlpha;
        displayObject.worldTransform.fromArray(tempTransform);

        for (i = 0, j = children.length; i < j; ++i) {
            children[i].updateTransform();
        }
    }
};


/**
 * Internal method assigned to the `render` property if using a CanvasRenderer.
 *
 * @private
 * @param displayObject {DisplayObject} The display object to render this texture on
 * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.
 * @param [clear] {boolean} If true the texture will be cleared before the displayObject is drawn
 * @param [restoreWorldTransform=true] {boolean} If true the displayObject's worldTransform/worldAlpha and all children
 *  transformations will be restored. Not restoring this information will be a little faster.
 */
RenderTexture.prototype.renderCanvas = function (displayObject, matrix, clear, restoreWorldTransform) {
    if (!this.valid) {
        return;
    }

    if (typeof restoreWorldTransform === 'undefined') {
        restoreWorldTransform = true;
    }

    var tempAlpha,
        tempTransform;

    if (restoreWorldTransform) {
        tempAlpha = displayObject.worldAlpha;
        tempTransform = displayObject.worldTransform.toArray();
    }

    var wt = displayObject.worldTransform;
    wt.identity();
    if (matrix) {
        wt.append(matrix);
    }

    // setWorld Alpha to ensure that the object is renderer at full opacity
    displayObject.worldAlpha = 1;

    // Time to update all the children of the displayObject with the new matrix..
    var children = displayObject.children;
    var i, j;

    for (i = 0, j = children.length; i < j; ++i) {
        children[i].updateTransform();
    }

    if (clear) {
        this.textureBuffer.clear();
    }

    var context = this.textureBuffer.context;

    var realResolution = this.renderer.resolution;

    this.renderer.resolution = this.resolution;

    this.renderer.renderDisplayObject(displayObject, context);

    this.renderer.resolution = realResolution;

    if (restoreWorldTransform) {
        displayObject.worldAlpha = tempAlpha;
        displayObject.worldTransform.fromArray(tempTransform);

        for (i = 0, j = children.length; i < j; ++i) {
            children[i].updateTransform();
        }
    }
};

/**
 * Will return a HTML Image of the texture
 *
 * @return {Image}
 */
RenderTexture.prototype.getImage = function () {
    var image = new Image();
    image.src = this.getBase64();
    return image;
};

/**
 * Will return a a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that.
 *
 * @return {string} A base64 encoded string of the texture.
 */
RenderTexture.prototype.getBase64 = function () {
    return this.getCanvas().toDataURL();
};

/**
 * Creates a Canvas element, renders this RenderTexture to it and then returns it.
 *
 * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
 */
RenderTexture.prototype.getCanvas = function () {
    if (this.renderer.type === CONST.WEBGL_RENDERER) {
        var gl =  this.renderer.gl;
        var width = this.textureBuffer.width;
        var height = this.textureBuffer.height;

        var webGLPixels = new Uint8Array(4 * width * height);

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);
        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        var tempCanvas = new CanvasBuffer(width, height);
        var canvasData = tempCanvas.context.getImageData(0, 0, width, height);
        canvasData.data.set(webGLPixels);

        tempCanvas.context.putImageData(canvasData, 0, 0);

        return tempCanvas.canvas;
    }
    else {
        return this.textureBuffer.canvas;
    }
};

},{"../const":4,"../math":12,"../renderers/canvas/utils/CanvasBuffer":21,"../renderers/webgl/utils/FilterTexture":37,"./BaseTexture":42,"./Texture":44}],44:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    VideoBaseTexture = require('./VideoBaseTexture'),
    TextureUvs = require('./TextureUvs'),
    eventTarget = require('../utils/eventTarget'),
    math = require('../math'),
    utils = require('../utils');

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided then the whole image is used.
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param baseTexture {BaseTexture} The base texture source to create the texture from
 * @param [frame] {Rectangle} The rectangle frame of the texture to show
 * @param [crop] {Rectangle} The area of original texture
 * @param [trim] {Rectangle} Trimmed texture rectangle
 */
function Texture(baseTexture, frame, crop, trim) {
    /**
     * Does this Texture have any frame data assigned to it?
     *
     * @member {boolean}
     */
    this.noFrame = false;

    if (!frame) {
        this.noFrame = true;
        frame = new math.Rectangle(0, 0, 1, 1);
    }

    if (baseTexture instanceof Texture) {
        baseTexture = baseTexture.baseTexture;
    }

    /**
     * The base texture that this texture uses.
     *
     * @member {BaseTexture}
     */
    this.baseTexture = baseTexture;

    /**
     * The frame specifies the region of the base texture that this texture uses
     *
     * @member {Rectangle}
     * @private
     */
    this._frame = frame;

    /**
     * The texture trim data.
     *
     * @member {Rectangle}
     */
    this.trim = trim;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    this.valid = false;

    /**
     * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
     *
     * @member {boolean}
     */
    this.requiresUpdate = false;

    /**
     * The WebGL UV data cache.
     *
     * @member {object}
     * @private
     */
    this._uvs = null;

    /**
     * The width of the Texture in pixels.
     *
     * @member {number}
     */
    this.width = 0;

    /**
     * The height of the Texture in pixels.
     *
     * @member {number}
     */
    this.height = 0;

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Rectangle}
     */
    this.crop = crop || new math.Rectangle(0, 0, 1, 1);

    if (baseTexture.hasLoaded) {
        if (this.noFrame) {
            frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
        }
        this.frame = frame;
    }
    else {
        baseTexture.addEventListener('loaded', this.onBaseTextureLoaded.bind(this));
    }
}

Texture.prototype.constructor = Texture;
module.exports = Texture;

eventTarget.mixin(Texture.prototype);

Object.defineProperties(Texture.prototype, {
    needsUpdate: {
        get: function () {
            return this.baseTexture.needsUpdate;
        },
        set: function (val) {
            this.baseTexture.needsUpdate = val;
        }
    },

    frame: {
        get: function () {
            return this._frame;
        },
        set: function (frame) {
            this._frame = frame;

            this.noFrame = false;

            this.width = frame.width;
            this.height = frame.height;

            this.crop.x = frame.x;
            this.crop.y = frame.y;
            this.crop.width = frame.width;
            this.crop.height = frame.height;

            if (!this.trim && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height)) {
                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);
            }

            this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;

            if (this.trim) {
                this.width = this.trim.width;
                this.height = this.trim.height;
                this._frame.width = this.trim.width;
                this._frame.height = this.trim.height;
            }

            if (this.valid) {
                this._updateUvs();
            }
        }
    }
});

/**
 * Called when the base texture is loaded
 *
 * @private
 */
Texture.prototype.onBaseTextureLoaded = function () {
    var baseTexture = this.baseTexture;
    baseTexture.removeEventListener('loaded', this.onLoaded);

    if (this.noFrame) {
        this.frame = new math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
    }

    this.dispatchEvent( { type: 'update', content: this } );
};

/**
 * Destroys this texture
 *
 * @param destroyBase {boolean} Whether to destroy the base texture as well
 */
Texture.prototype.destroy = function (destroyBase) {
    if (destroyBase) {
        this.baseTexture.destroy();
    }

    this.valid = false;
};

/**
 * Updates the internal WebGL UV cache.
 *
 * @private
 */
Texture.prototype._updateUvs = function () {
    if (!this._uvs) {
        this._uvs = new TextureUvs();
    }

    var frame = this.crop;
    var tw = this.baseTexture.width;
    var th = this.baseTexture.height;

    this._uvs.x0 = frame.x / tw;
    this._uvs.y0 = frame.y / th;

    this._uvs.x1 = (frame.x + frame.width) / tw;
    this._uvs.y1 = frame.y / th;

    this._uvs.x2 = (frame.x + frame.width) / tw;
    this._uvs.y2 = (frame.y + frame.height) / th;

    this._uvs.x3 = frame.x / tw;
    this._uvs.y3 = (frame.y + frame.height) / th;
};

/**
 * Helper function that creates a Texture object from the given image url.
 * If the image is not in the texture cache it will be  created and loaded.
 *
 * @static
 * @param imageUrl {string} The image url of the texture
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return Texture
 */
Texture.fromImage = function (imageUrl, crossorigin, scaleMode) {
    var texture = utils.TextureCache[imageUrl];

    if (!texture) {
        texture = new Texture(BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));
        utils.TextureCache[imageUrl] = texture;
    }

    return texture;
};

/**
 * Helper function that returns a Texture objected based on the given frame id.
 * If the frame id is not in the texture cache an error will be thrown.
 *
 * @static
 * @param frameId {string} The frame id of the texture
 * @return Texture
 */
Texture.fromFrame = function (frameId) {
    var texture = utils.TextureCache[frameId];
    if (!texture) {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ');
    }
    return texture;
};

/**
 * Helper function that creates a new Texture based on the given canvas element.
 *
 * @static
 * @param canvas {Canvas} The canvas element source of the texture
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture}
 */
Texture.fromCanvas = function (canvas, scaleMode) {
    return new Texture(BaseTexture.fromCanvas(canvas, scaleMode));
};

/**
 * Helper function that creates a new Texture based on the given video element.
 *
 * @static
 * @param video {HTMLVideoElement}
 * @param scaleMode {number} See {{#crossLink "PIXI/scaleModes:property"}}scaleModes{{/crossLink}} for possible values
 * @return {Texture} A Texture
 */
Texture.fromVideo = function (video, scaleMode) {
    return new Texture(VideoBaseTexture.baseTextureFromVideo(video, scaleMode));
};

/**
 * Adds a texture to the global utils.TextureCache. This cache is shared across the whole PIXI object.
 *
 * @static
 * @param texture {Texture} The Texture to add to the cache.
 * @param id {string} The id that the texture will be stored against.
 */
Texture.addTextureToCache = function (texture, id) {
    utils.TextureCache[id] = texture;
};

/**
 * Remove a texture from the global utils.TextureCache.
 *
 * @static
 * @param id {string} The id of the texture to be removed
 * @return {Texture} The texture that was removed
 */
Texture.removeTextureFromCache = function (id) {
    var texture = utils.TextureCache[id];

    delete utils.TextureCache[id];
    delete utils.BaseTextureCache[id];

    return texture;
};

Texture.emptyTexture = new Texture(new BaseTexture());

},{"../math":12,"../utils":50,"../utils/eventTarget":49,"./BaseTexture":42,"./TextureUvs":45,"./VideoBaseTexture":46}],45:[function(require,module,exports){
function TextureUvs() {
    this.x0 = 0;
    this.y0 = 0;

    this.x1 = 0;
    this.y1 = 0;

    this.x2 = 0;
    this.y2 = 0;

    this.x3 = 0;
    this.y3 = 0;
}

module.exports = TextureUvs;

},{}],46:[function(require,module,exports){
var BaseTexture = require('./BaseTexture'),
    utils = require('../utils');

/**
 * A texture of a [playing] Video.
 *
 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
 *
 * @class
 * @extends BaseTexture
 * @namespace PIXI
 * @param source {HTMLVideoElement}
 * @param [scaleMode] {number} See {@link scaleModes} for possible values
 */
function VideoBaseTexture(source, scaleMode) {
    if (!source){
        throw new Error('No video source element specified.');
    }

    // hook in here to check if video is already available.
    // BaseTexture looks for a source.complete boolean, plus width & height.

    if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
        source.complete = true;
    }

    BaseTexture.call(this, source, scaleMode);

    this.autoUpdate = false;

    this._boundOnUpdate = this._onUpdate.bind(this);
    this._boundOnCanPlay = this._onCanPlay.bind(this);

    if (!source.complete) {
        source.addEventListener('canplay', this._boundOnCanPlay);
        source.addEventListener('canplaythrough', this._boundOnCanPlay);

        // started playing..
        source.addEventListener('play', this._onPlayStart.bind(this));
        source.addEventListener('pause', this._onPlayStop.bind(this));
    }

    this.__loaded = false;
}

VideoBaseTexture.prototype = Object.create(BaseTexture.prototype);
VideoBaseTexture.prototype.constructor = VideoBaseTexture;
module.exports = VideoBaseTexture;

VideoBaseTexture.prototype._onUpdate = function () {
    if (this.autoUpdate) {
        window.requestAnimationFrame(this._boundOnUpdate);
        this.needsUpdate = true;
    }
};

VideoBaseTexture.prototype._onPlayStart = function () {
    if (!this.autoUpdate) {
        window.requestAnimationFrame(this._boundOnUpdate);
        this.autoUpdate = true;
    }
};

VideoBaseTexture.prototype._onPlayStop = function () {
    this.autoUpdate = false;
};

VideoBaseTexture.prototype._onCanPlay = function () {
    this.hasLoaded = true;

    if (this.source) {
        this.source.removeEventListener('canplay', this._boundOnCanPlay);
        this.source.removeEventListener('canplaythrough', this._boundOnCanPlay);

        this.width = this.source.videoWidth;
        this.height = this.source.videoHeight;

        this.source.play();

        // prevent multiple loaded dispatches..
        if(!this.__loaded){
            this.__loaded = true;
            this.emit('loaded', this);
        }
    }
};

VideoBaseTexture.prototype.destroy = function () {
    if (this.source && this.source._pixiId) {
        utils.BaseTextureCache[ this.source._pixiId ] = null;
        delete utils.BaseTextureCache[ this.source._pixiId ];

        this.source._pixiId = null;
        delete this.source._pixiId;
    }

    BaseTexture.prototype.destroy.call(this);
};

/**
 * Mimic Pixi BaseTexture.from.... method.
 *
 * @static
 * @param video {HTMLVideoElement}
 * @param scaleMode {number} See {@link scaleModes} for possible values
 * @return {VideoBaseTexture}
 */
VideoBaseTexture.fromVideo = function (video, scaleMode) {
    if (!video._pixiId) {
        video._pixiId = 'video_' + utils.uuid();
    }

    var baseTexture = utils.BaseTextureCache[video._pixiId];

    if (!baseTexture) {
        baseTexture = new VideoBaseTexture(video, scaleMode);
        utils.BaseTextureCache[ video._pixiId ] = baseTexture;
    }

    return baseTexture;
};

/**
 * Mimic Pixi BaseTexture.from.... method.
 *
 * This can be used in a couple ways, such as:
 *
 * ```js
 * var texture = PIXI.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
 *
 * var texture = PIXI.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
 *
 * var texture = PIXI.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
 *
 * var texture = PIXI.VideoBaseTexture.fromUrls([
 *     { src: '/video.webm', mime: 'video/webm' },
 *     { src: '/video.mp4', mime: 'video/mp4' }
 * ]);
 * ```
 *
 * @alias fromUrls
 * @static
 * @param videoSrc {string|object|string[]|object[]} The URL(s) for the video.
 * @param [videoSrc.src] {string} One of the source urls for the video
 * @param [videoSrc.mime] {string} The mimetype of the video (e.g. 'video/mp4'). If not specified
 *  the url's extension will be used as the second part of the mime type.
 * @param scaleMode {number} See {@link scaleModes} for possible values
 * @return {VideoBaseTexture}
 */
VideoBaseTexture.fromUrl = function (videoSrc, scaleMode) {
    var video = document.createElement('video');

    // array of objects or strings
    if (Array.isArray(videoSrc)) {
        for (var i = 0; i < videoSrc.length; ++i) {
            video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
        }
    }
    // single object or string
    else {
        video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
    }

    video.load();
    video.play();

    return VideoBaseTexture.textureFromVideo(video, scaleMode);
};

VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

function createSource(path, type) {
    if (!type) {
        type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
    }

    var source = document.createElement('source');

    source.src = path;
    source.type = type;

    return source;
}

},{"../utils":50,"./BaseTexture":42}],47:[function(require,module,exports){
/**
 * Creates an homogenous object for tracking events so users can know what to expect.
 *
 * @class
 * @namespace PIXI
 * @param target {object} The target object that the event is called on
 * @param name {string} The string name of the event that was triggered
 * @param data {object} Arbitrary event data to pass along
 */
function EventData(target, name, data) {
    // for duck typing in the ".on()" function
    this.__isEventObject = true;

    /**
     * Tracks the state of bubbling propagation. Do not
     * set this directly, instead use `event.stopPropagation()`
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    this.stopped = false;

    /**
     * Tracks the state of sibling listener propagation. Do not
     * set this directly, instead use `event.stopImmediatePropagation()`
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    this.stoppedImmediate = false;

    /**
     * The original target the event triggered on.
     *
     * @member {object}
     * @readonly
     */
    this.target = target;

    /**
     * The string name of the event that this represents.
     *
     * @member {string}
     * @readonly
     */
    this.type = name;

    /**
     * The data that was passed in with this event.
     *
     * @member {object}
     * @readonly
     */
    this.data = data;

    /**
     * The timestamp when the event occurred.
     *
     * @member {number}
     * @readonly
     */
    this.timeStamp = Date.now();
}

EventData.prototype.constructor = EventData;
module.exports = EventData;

/**
 * Stops the propagation of events up the scene graph (prevents bubbling).
 *
 */
EventData.prototype.stopPropagation = function stopPropagation() {
    this.stopped = true;
};

/**
 * Stops the propagation of events to sibling listeners (no longer calls any listeners).
 *
 */
EventData.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
    this.stoppedImmediate = true;
};

},{}],48:[function(require,module,exports){
//TODO: Have Graphics use https://github.com/mattdesl/shape2d
// and https://github.com/mattdesl/shape2d-triangulate instead of custom code.

/*
    PolyK library
    url: http://polyk.ivank.net
    Released under MIT licence.

    Copyright (c) 2012 Ivan Kuckir

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.

    This is an amazing lib!

    Slightly modified by Mat Groves (matgroves.com);
*/

/**
 * Based on the Polyk library http://polyk.ivank.net released under MIT licence.
 * This is an amazing lib!
 * Slightly modified by Mat Groves (matgroves.com);
 *
 * @namespace PIXI
 */
var PolyK = module.exports = {};

/**
 * Triangulates shapes for webGL graphic fills.
 *
 */
PolyK.Triangulate = function (p) {
    var sign = true;

    var n = p.length >> 1;
    if (n < 3) return [];

    var tgs = [];
    var avl = [];
    for (var i = 0; i < n; i++) avl.push(i);

    i = 0;
    var al = n;
    while(al > 3) {
        var i0 = avl[(i+0)%al];
        var i1 = avl[(i+1)%al];
        var i2 = avl[(i+2)%al];

        var ax = p[2*i0],  ay = p[2*i0+1];
        var bx = p[2*i1],  by = p[2*i1+1];
        var cx = p[2*i2],  cy = p[2*i2+1];

        var earFound = false;
        if (PolyK._convex(ax, ay, bx, by, cx, cy, sign)) {
            earFound = true;
            for (var j = 0; j < al; j++) {
                var vi = avl[j];
                if (vi === i0 || vi === i1 || vi === i2) continue;

                if (PolyK._PointInTriangle(p[2*vi], p[2*vi+1], ax, ay, bx, by, cx, cy)) {
                    earFound = false;
                    break;
                }
            }
        }

        if (earFound) {
            tgs.push(i0, i1, i2);
            avl.splice((i+1)%al, 1);
            al--;
            i = 0;
        }
        else if (i++ > 3*al) {
            // need to flip flip reverse it!
            // reset!
            if (sign) {
                tgs = [];
                avl = [];
                for (i = 0; i < n; i++) avl.push(i);

                i = 0;
                al = n;

                sign = false;
            }
            else {
             //   window.console.log("PIXI Warning: shape too complex to fill");
                return null;
            }
        }
    }

    tgs.push(avl[0], avl[1], avl[2]);
    return tgs;
};

/**
 * Checks whether a point is within a triangle
 *
 * @param px {number} x coordinate of the point to test
 * @param py {number} y coordinate of the point to test
 * @param ax {number} x coordinate of the a point of the triangle
 * @param ay {number} y coordinate of the a point of the triangle
 * @param bx {number} x coordinate of the b point of the triangle
 * @param by {number} y coordinate of the b point of the triangle
 * @param cx {number} x coordinate of the c point of the triangle
 * @param cy {number} y coordinate of the c point of the triangle
 * @private
 * @return {boolean}
 */
PolyK._PointInTriangle = function (px, py, ax, ay, bx, by, cx, cy) {
    var v0x = cx-ax;
    var v0y = cy-ay;
    var v1x = bx-ax;
    var v1y = by-ay;
    var v2x = px-ax;
    var v2y = py-ay;

    var dot00 = v0x*v0x+v0y*v0y;
    var dot01 = v0x*v1x+v0y*v1y;
    var dot02 = v0x*v2x+v0y*v2y;
    var dot11 = v1x*v1x+v1y*v1y;
    var dot12 = v1x*v2x+v1y*v2y;

    var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
    var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
    var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

    // Check if point is in triangle
    return (u >= 0) && (v >= 0) && (u + v < 1);
};

/**
 * Checks whether a shape is convex
 *
 * @private
 * @return {boolean}
 */
PolyK._convex = function (ax, ay, bx, by, cx, cy, sign) {
    return ((ay-by)*(cx-bx) + (bx-ax)*(cy-by) >= 0) === sign;
};

},{}],49:[function(require,module,exports){
var EventData = require('./EventData');

/**
 * Mixins event emitter functionality to an object.
 *
 * @mixin
 * @namespace PIXI
 * @example
 *      function MyEmitter() {}
 *
 *      eventTarget.mixin(MyEmitter.prototype);
 *
 *      var em = new MyEmitter();
 *      em.emit('eventName', 'some data', 'some more data', {}, null, ...);
 */
function eventTarget(obj) {
    /**
     * Return a list of assigned event listeners.
     *
     * @param eventName {string} The events that should be listed.
     * @return {Array} An array of listener functions
     */
    obj.listeners = function listeners(eventName) {
        this._listeners = this._listeners || {};

        return this._listeners[eventName] ? this._listeners[eventName].slice() : [];
    };

    /**
     * Emit an event to all registered event listeners.
     *
     * @alias dispatchEvent
     * @param eventName {string} The name of the event.
     * @return {boolean} Indication if we've emitted an event.
     */
    obj.emit = obj.dispatchEvent = function emit(eventName, data) {
        this._listeners = this._listeners || {};

        // fast return when there are no listeners
        if (!this._listeners[eventName]) {
            return;
        }

        //backwards compat with old method ".emit({ type: 'something' })"
        if (typeof eventName === 'object') {
            data = eventName;
            eventName = eventName.type;
        }

        //ensure we are using a real pixi event
        if (!data || data.__isEventObject !== true) {
            data = new EventData(this, eventName, data);
        }

        //iterate the listeners
        var listeners = this._listeners[eventName].slice(0),
            length = listeners.length,
            fn = listeners[0],
            i;

        for (i = 0; i < length; fn = listeners[++i]) {
            //call the event listener
            fn.call(this, data);

            //if "stopImmediatePropagation" is called, stop calling sibling events
            if (data.stoppedImmediate) {
                return this;
            }
        }

        //if "stopPropagation" is called then don't bubble the event
        if (data.stopped) {
            return this;
        }

        //bubble this event up the scene graph
        if (this.parent && this.parent.emit) {
            this.parent.emit.call(this.parent, eventName, data);
        }

        return this;
    };

    /**
     * Register a new EventListener for the given event.
     *
     * @alias addEventListener
     * @param eventName {string} Name of the event.
     * @param callback {Functon} fn Callback function.
     */
    obj.on = obj.addEventListener = function on(eventName, fn) {
        this._listeners = this._listeners || {};

        (this._listeners[eventName] = this._listeners[eventName] || [])
            .push(fn);

        return this;
    };

    /**
     * Add an EventListener that's only called once.
     *
     * @param eventName {string} Name of the event.
     * @param callback {Function} Callback function.
     */
    obj.once = function once(eventName, fn) {
        this._listeners = this._listeners || {};

        var self = this;
        function onceHandlerWrapper() {
            fn.apply(self.off(eventName, onceHandlerWrapper), arguments);
        }
        onceHandlerWrapper._originalHandler = fn;

        return this.on(eventName, onceHandlerWrapper);
    };

    /**
     * Remove event listeners.
     *
     * @alias removeEventListener
     * @param eventName {string} The event we want to remove.
     * @param callback {Function} The listener that we need to find.
     */
    obj.off = obj.removeEventListener = function off(eventName, fn) {
        this._listeners = this._listeners || {};

        if (!this._listeners[eventName]) {
            return this;
        }

        var list = this._listeners[eventName],
            i = fn ? list.length : 0;

        while(i-- > 0) {
            if (list[i] === fn || list[i]._originalHandler === fn) {
                list.splice(i, 1);
            }
        }

        if (list.length === 0) {
            delete this._listeners[eventName];
        }

        return this;
    };

    /**
     * Remove all listeners or only the listeners for the specified event.
     *
     * @param eventName {string} The event you want to remove all listeners for.
     */
    obj.removeAllListeners = function removeAllListeners(eventName) {
        this._listeners = this._listeners || {};

        if (!this._listeners[eventName]) {
            return this;
        }

        delete this._listeners[eventName];

        return this;
    };
}

module.exports = {
    /**
     * Mixes in the properties of the eventTarget prototype onto another object
     *
     * @param object {object} The obj to mix into
     */
    mixin: function mixin(obj) {
        eventTarget(obj);
    }
};

},{"./EventData":47}],50:[function(require,module,exports){
var CONST = require('../const');

/**
 * @namespace PIXI
 */
var utils = module.exports = {
    _uid: 0,
    _saidHello: false,

    PolyK:      require('./PolyK'),
    EventData:  require('./EventData'),
    eventTarget: require('./eventTarget'),

    /**
     * Gets the next uuid
     *
     * @return {number} The next uuid to use.
     */
    uuid: function () {
        return ++utils._uid;
    },

    /**
     * Converts a hex color number to an [R, G, B] array
     *
     * @param hex {number}
     * @return {number[]} An array representing the [R, G, B] of the color.
     */
    hex2rgb: function (hex, out) {
        out = out || [];

        out[0] = (hex >> 16 & 0xFF) / 255;
        out[1] = (hex >> 8 & 0xFF) / 255;
        out[2] = (hex & 0xFF) / 255;

        return out;
    },

    /**
     * Converts a hex color number to a string.
     *
     * @param hex {number}
     * @return {string} The string color.
     */
    hex2string: function (hex) {
        hex = hex.toString(16);
        hex = '000000'.substr(0, 6 - hex.length) + hex;

        return '#' + hex;
    },

    /**
     * Converts a color as an [R, G, B] array to a hex number
     *
     * @param rgb {number[]}
     * @return {number} The color number
     */
    rgb2hex: function (rgb) {
        return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);
    },

    /**
     * Checks whether the Canvas BlendModes are supported by the current browser
     *
     * @return {boolean} whether they are supported
     */
    canUseNewCanvasBlendModes: function () {
        if (typeof document === 'undefined') {
            return false;
        }

        var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d');

        canvas.width = 1;
        canvas.height = 1;

        context.fillStyle = '#000';
        context.fillRect(0, 0, 1, 1);

        context.globalCompositeOperation = 'multiply';

        context.fillStyle = '#fff';
        context.fillRect(0, 0, 1, 1);

        return context.getImageData(0,0,1,1).data[0] === 0;
    },

    /**
     * Given a number, this function returns the closest number that is a power of two
     * this function is taken from Starling Framework as its pretty neat ;)
     *
     * @param number {number}
     * @return {number} the closest number that is a power of two
     */
    getNextPowerOfTwo: function (number) {
        // see: http://en.wikipedia.org/wiki/Power_of_two#Fast_algorithm_to_check_if_a_positive_number_is_a_power_of_two
        if (number > 0 && (number & (number - 1)) === 0) {
            return number;
        }
        else {
            var result = 1;

            while (result < number) {
                result <<= 1;
            }

            return result;
        }
    },

    /**
     * checks if the given width and height make a power of two rectangle
     *
     * @param width {number}
     * @param height {number}
     * @return {boolean}
     */
    isPowerOfTwo: function (width, height) {
        return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);
    },

    /**
     * Logs out the version and renderer information for this running instance of PIXI.
     * If you don't want to see this message you can set `PIXI.utils._saidHello = true;`
     * so the library thinks it already said it. Keep in mind that doing that will forever
     * makes you a jerk face.
     *
     * @param {string} type - The string renderer type to log.
     * @constant
     * @static
     */
    sayHello: function (type) {
        if (utils._saidHello) {
            return;
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            var args = [
                '%c %c %c Pixi.js ' + CONST.VERSION + ' - ' + type + '  %c ' + ' %c ' + ' http://www.pixijs.com/  %c %c ♥%c♥%c♥ ',
                'background: #ff66a5',
                'background: #ff66a5',
                'color: #ff66a5; background: #030307;',
                'background: #ff66a5',
                'background: #ffc3dc',
                'background: #ff66a5',
                'color: #ff2424; background: #fff',
                'color: #ff2424; background: #fff',
                'color: #ff2424; background: #fff'
            ];

            console.log.apply(console, args); //jshint ignore:line
        }
        else if (window.console) {
            console.log('Pixi.js ' + CONST.VERSION + ' - ' + type + ' - http://www.pixijs.com/'); //jshint ignore:line
        }

        utils._saidHello = true;
    },

    /**
     * A wrapper for ajax requests to be handled cross browser
     *
     * TODO: Replace this wil superagent
     *
     * @class
     * @namespace PIXI
     */
    AjaxRequest: function () {
        var activexmodes = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.3.0', 'Microsoft.XMLHTTP']; //activeX versions to check for in IE

        if (window.ActiveXObject) { //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
            for (var i=0; i<activexmodes.length; i++) {
                try{
                    return new window.ActiveXObject(activexmodes[i]);
                }
                catch(e) {
                    //suppress error
                }
            }
        }
        else if (window.XMLHttpRequest) // if Mozilla, Safari etc
        {
            return new window.XMLHttpRequest();
        }
        else {
            return false;
        }
    },

    // TODO: refactor out this
    AnimCache: {},
    FrameCache: {},
    TextureCache: {},
    BaseTextureCache: {}
};

},{"../const":4,"./EventData":47,"./PolyK":48,"./eventTarget":49}],51:[function(require,module,exports){
var core = require('../core');

/**
 * A MovieClip is a simple way to display an animation depicted by a list of textures.
 *
 * @class
 * @extends Sprite
 * @namespace PIXI
 * @param textures {Texture[]} an array of {Texture} objects that make up the animation
 */
function MovieClip(textures) {
    core.Sprite.call(this, textures[0]);

    /**
     * The array of textures that make up the animation
     *
     * @member Texture[]
     */
    this.textures = textures;

    /**
     * The speed that the MovieClip will play at. Higher is faster, lower is slower
     *
     * @member number
     * @default 1
     */
    this.animationSpeed = 1;

    /**
     * Whether or not the movie clip repeats after playing.
     *
     * @member boolean
     * @default true
     */
    this.loop = true;

    /**
     * Function to call when a MovieClip finishes playing
     *
     * @method
     * @memberof MovieClip#
     */
    this.onComplete = null;

    /**
     * The MovieClips current frame index (this may not have to be a whole number)
     *
     * @member number
     * @default 0
     * @readonly
     */
    this.currentFrame = 0;

    /**
     * Indicates if the MovieClip is currently playing
     *
     * @member boolean
     * @readonly
     */
    this.playing = false;
}

// constructor
MovieClip.prototype = Object.create(core.Sprite.prototype);
MovieClip.prototype.constructor = MovieClip;

Object.defineProperties(MovieClip.prototype, {
    /**
     * totalFrames is the total number of frames in the MovieClip. This is the same as number of textures
     * assigned to the MovieClip.
     *
     * @member
     * @memberof MovieClip#
     * @default 0
     * @readonly
     */
    totalFrames: {
        get: function() {
            return this.textures.length;
        }
    }
});

/**
 * Stops the MovieClip
 *
 */
MovieClip.prototype.stop = function () {
    this.playing = false;
};

/**
 * Plays the MovieClip
 *
 */
MovieClip.prototype.play = function () {
    this.playing = true;
};

/**
 * Stops the MovieClip and goes to a specific frame
 *
 * @param frameNumber {number} frame index to stop at
 */
MovieClip.prototype.gotoAndStop = function (frameNumber) {
    this.playing = false;
    this.currentFrame = frameNumber;

    var round = Math.round(this.currentFrame);
    this.setTexture(this.textures[round % this.textures.length]);
};

/**
 * Goes to a specific frame and begins playing the MovieClip
 *
 * @param frameNumber {number} frame index to start at
 */
MovieClip.prototype.gotoAndPlay = function (frameNumber) {
    this.currentFrame = frameNumber;
    this.playing = true;
};

/*
 * Updates the object transform for rendering
 *
 * @private
 */
MovieClip.prototype.updateTransform = function () {
    this.displayObjectContainerUpdateTransform();

    if (!this.playing) {
        return;
    }

    this.currentFrame += this.animationSpeed;

    var round = Math.round(this.currentFrame);

    if (round < 0) {
        if (this.loop) {
            this.currentFrame += this.textures.length;
            this.texture = this.textures[this.currentFrame];
        }
        else {
            this.gotoAndStop(0);

            if (this.onComplete) {
                this.onComplete();
            }
        }
    }
    else if (this.loop || round < this.textures.length) {
        this.texture = this.textures[round % this.textures.length];
    }
    else if (round >= this.textures.length) {
        this.gotoAndStop(this.textures.length - 1);

        if (this.onComplete) {
            this.onComplete();
        }
    }
};

/**
 * A short hand way of creating a movieclip from an array of frame ids
 *
 * @static
 * @param frames {string[]} the array of frames ids the movieclip will use as its texture frames
 */
MovieClip.fromFrames = function (frames) {
    var textures = [];

    for (var i = 0; i < frames.length; ++i) {
        textures.push(new core.Texture.fromFrame(frames[i]));
    }

    return new MovieClip(textures);
};

/**
 * A short hand way of creating a movieclip from an array of image ids
 *
 * @static
 * @param images {string[]} the array of image urls the movieclip will use as its texture frames
 */
MovieClip.fromImages = function (images) {
    var textures = [];

    for (var i = 0; i < images.length; ++i) {
        textures.push(new core.Texture.fromImage(images[i]));
    }

    return new MovieClip(textures);
};

},{"../core":9}],52:[function(require,module,exports){
var Strip = require('./Strip');

/**
 *
 * @class
 * @namespace PIXI
 * @extends Strip
 * @param {Texture} texture - The texture to use on the rope.
 * @param {Array} points - An array of {Point}.
 *
 */
function Rope(texture, points) {
    Strip.call(this, texture);
    this.points = points;

    this.vertices = new Float32Array(points.length * 4);
    this.uvs = new Float32Array(points.length * 4);
    this.colors = new Float32Array(points.length * 2);
    this.indices = new Uint16Array(points.length * 2);

    this.refresh();
}


// constructor
Rope.prototype = Object.create(Strip.prototype);
Rope.prototype.constructor = Rope;
module.exports = Rope;

/**
 * Refreshes
 *
 */
Rope.prototype.refresh = function () {
    var points = this.points;

    if (points.length < 1) {
        return;
    }

    var uvs = this.uvs;

    var indices = this.indices;
    var colors = this.colors;

    // this.count -= 0.2;

    uvs[0] = 0;
    uvs[1] = 0;
    uvs[2] = 0;
    uvs[3] = 1;

    colors[0] = 1;
    colors[1] = 1;

    indices[0] = 0;
    indices[1] = 1;

    var total = points.length,
        point, index, amount;

    for (var i = 1; i < total; i++) {
        point = points[i];
        index = i * 4;
        // time to do some smart drawing!
        amount = i / (total-1);

        if (i%2) {
            uvs[index] = amount;
            uvs[index+1] = 0;

            uvs[index+2] = amount;
            uvs[index+3] = 1;
        }
        else {
            uvs[index] = amount;
            uvs[index+1] = 0;

            uvs[index+2] = amount;
            uvs[index+3] = 1;
        }

        index = i * 2;
        colors[index] = 1;
        colors[index+1] = 1;

        index = i * 2;
        indices[index] = index;
        indices[index + 1] = index + 1;
    }
};

/*
 * Updates the object transform for rendering
 *
 * @private
 */
Rope.prototype.updateTransform = function () {
    var points = this.points;

    if (points.length < 1) {
        return;
    }

    var lastPoint = points[0];
    var nextPoint;
    var perpX = 0;
    var perpY = 0;

    // this.count -= 0.2;

    var vertices = this.vertices;
    var total = points.length,
        point, index, ratio, perpLength, num;

    for (var i = 0; i < total; i++) {
        point = points[i];
        index = i * 4;

        if (i < points.length-1) {
            nextPoint = points[i+1];
        }
        else {
            nextPoint = point;
        }

        perpY = -(nextPoint.x - lastPoint.x);
        perpX = nextPoint.y - lastPoint.y;

        ratio = (1 - (i / (total-1))) * 10;

        if (ratio > 1) {
            ratio = 1;
        }

        perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
        num = this.texture.height / 2; //(20 + Math.abs(Math.sin((i + this.count) * 0.3) * 50) )* ratio;
        perpX /= perpLength;
        perpY /= perpLength;

        perpX *= num;
        perpY *= num;

        vertices[index] = point.x + perpX;
        vertices[index+1] = point.y + perpY;
        vertices[index+2] = point.x - perpX;
        vertices[index+3] = point.y - perpY;

        lastPoint = point;
    }

    this.displayObjectContainerUpdateTransform();
};

/**
 * Sets the texture that the Rope will use
 *
 * @param texture {Texture} the texture that will be used
 */
Rope.prototype.setTexture = function (texture) {
    // stop current texture
    this.texture = texture;
    //this.updateFrame = true;
};

},{"./Strip":53}],53:[function(require,module,exports){
var core = require('../core');

/**
 *
 * @class
 * @extends DisplayObjectContainer
 * @namespace PIXI
 * @param texture {Texture} The texture to use
 * @param width {number} the width
 * @param height {number} the height
 *
 */
function Strip(texture) {
    core.DisplayObjectContainer.call(this);

    /**
     * The texture of the strip
     *
     * @member {Texture}
     */
    this.texture = texture;

    // set up the main bits..
    this.uvs = new Float32Array([0, 1,
                                 1, 1,
                                 1, 0,
                                 0, 1]);

    this.vertices = new Float32Array([0, 0,
                                      100, 0,
                                      100, 100,
                                      0, 100]);

    this.colors = new Float32Array([1, 1, 1, 1]);

    this.indices = new Uint16Array([0, 1, 2, 3]);

    /**
     * Whether the strip is dirty or not
     *
     * @member {boolean}
     */
    this.dirty = true;

    /**
     * The blend mode to be applied to the sprite. Set to blendModes.NORMAL to remove any blend mode.
     *
     * @member {number}
     * @default CONST.blendModes.NORMAL;
     */
    this.blendMode = core.CONST.blendModes.NORMAL;

    /**
     * Triangles in canvas mode are automatically antialiased, use this value to force triangles to overlap a bit with each other.
     *
     * @member {number}
     */
    this.canvasPadding = 0;

    this.drawMode = Strip.DrawModes.TRIANGLE_STRIP;
}

// constructor
Strip.prototype = Object.create(core.DisplayObjectContainer.prototype);
Strip.prototype.constructor = Strip;
module.exports = Strip;

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer}
 */
Strip.prototype.renderWebGL = function (renderer) {
    // if the sprite is not visible or the alpha is 0 then no need to render this element
    if (!this.visible || this.alpha <= 0) {
        return;
    }

    // render triangle strip..

    renderer.spriteBatch.stop();

    // init! init!
    if (!this._vertexBuffer) {
        this._initWebGL(renderer);
    }

    renderer.shaderManager.setShader(renderer.shaderManager.stripShader);

    this._renderStrip(renderer);

    ///renderer.shaderManager.activateDefaultShader();

    renderer.spriteBatch.start();

    //TODO check culling
};

Strip.prototype._initWebGL = function (renderer) {
    // build the strip!
    var gl = renderer.gl;

    this._vertexBuffer = gl.createBuffer();
    this._indexBuffer = gl.createBuffer();
    this._uvBuffer = gl.createBuffer();
    this._colorBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER,  this.uvs, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this._colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
};

Strip.prototype._renderStrip = function (renderer) {
    var gl = renderer.gl;
    var projection = renderer.projection,
        offset = renderer.offset,
        shader = renderer.shaderManager.stripShader;

    var drawMode = this.drawMode === Strip.DrawModes.TRIANGLE_STRIP ? gl.TRIANGLE_STRIP : gl.TRIANGLES;

    // gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mat4Real);

    renderer.blendModeManager.setBlendMode(this.blendMode);


    // set uniforms
    gl.uniformMatrix3fv(shader.translationMatrix, false, this.worldTransform.toArray(true));
    gl.uniform2f(shader.projectionVector, projection.x, -projection.y);
    gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);
    gl.uniform1f(shader.alpha, this.worldAlpha);

    if (!this.dirty) {

        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);
        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

        // update the uvs
        gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);
        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);

        // check if a texture is dirty..
        if (this.texture.baseTexture._dirty[gl.id]) {
            renderer.updateTexture(this.texture.baseTexture);
        }
        else {
            // bind the current texture
            gl.bindTexture(gl.TEXTURE_2D, this.texture.baseTexture._glTextures[gl.id]);
        }

        // dont need to upload!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);


    }
    else {

        this.dirty = false;
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);

        // update the uvs
        gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);
        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);

        // check if a texture is dirty..
        if (this.texture.baseTexture._dirty[gl.id]) {
            renderer.updateTexture(this.texture.baseTexture);
        }
        else {
            gl.bindTexture(gl.TEXTURE_2D, this.texture.baseTexture._glTextures[gl.id]);
        }

        // dont need to upload!
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    }
    //console.log(gl.TRIANGLE_STRIP)
    //
    //
    gl.drawElements(drawMode, this.indices.length, gl.UNSIGNED_SHORT, 0);


};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer}
 */
Strip.prototype.renderCanvas = function (renderer) {
    var context = renderer.context;

    var transform = this.worldTransform;

    if (renderer.roundPixels) {
        context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx | 0, transform.ty | 0);
    }
    else {
        context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
    }

    if (this.drawMode === Strip.DrawModes.TRIANGLE_STRIP) {
        this._renderCanvasTriangleStrip(context);
    }
    else {
        this._renderCanvasTriangles(context);
    }
};

Strip.prototype._renderCanvasTriangleStrip = function (context) {
    // draw triangles!!
    var vertices = this.vertices;
    var uvs = this.uvs;

    var length = vertices.length / 2;
    // this.count++;

    for (var i = 0; i < length - 2; i++) {
        // draw some triangles!
        var index = i * 2;
        this._renderCanvasDrawTriangle(context, vertices, uvs, index, (index + 2), (index + 4));
    }
};

Strip.prototype._renderCanvasTriangles = function (context) {
    // draw triangles!!
    var vertices = this.vertices;
    var uvs = this.uvs;
    var indices = this.indices;

    var length = indices.length;
    // this.count++;

    for (var i = 0; i < length; i += 3) {
        // draw some triangles!
        var index0 = indices[i] * 2, index1 = indices[i + 1] * 2, index2 = indices[i + 2] * 2;
        this._renderCanvasDrawTriangle(context, vertices, uvs, index0, index1, index2);
    }
};

Strip.prototype._renderCanvasDrawTriangle = function (context, vertices, uvs, index0, index1, index2) {
    var textureSource = this.texture.baseTexture.source;
    var textureWidth = this.texture.width;
    var textureHeight = this.texture.height;

    var x0 = vertices[index0], x1 = vertices[index1], x2 = vertices[index2];
    var y0 = vertices[index0 + 1], y1 = vertices[index1 + 1], y2 = vertices[index2 + 1];

    var u0 = uvs[index0] * textureWidth, u1 = uvs[index1] * textureWidth, u2 = uvs[index2] * textureWidth;
    var v0 = uvs[index0 + 1] * textureHeight, v1 = uvs[index1 + 1] * textureHeight, v2 = uvs[index2 + 1] * textureHeight;

    if (this.canvasPadding > 0) {
        var paddingX = this.canvasPadding / this.worldTransform.a;
        var paddingY = this.canvasPadding / this.worldTransform.d;
        var centerX = (x0 + x1 + x2) / 3;
        var centerY = (y0 + y1 + y2) / 3;

        var normX = x0 - centerX;
        var normY = y0 - centerY;

        var dist = Math.sqrt(normX * normX + normY * normY);
        x0 = centerX + (normX / dist) * (dist + paddingX);
        y0 = centerY + (normY / dist) * (dist + paddingY);

        //

        normX = x1 - centerX;
        normY = y1 - centerY;

        dist = Math.sqrt(normX * normX + normY * normY);
        x1 = centerX + (normX / dist) * (dist + paddingX);
        y1 = centerY + (normY / dist) * (dist + paddingY);

        normX = x2 - centerX;
        normY = y2 - centerY;

        dist = Math.sqrt(normX * normX + normY * normY);
        x2 = centerX + (normX / dist) * (dist + paddingX);
        y2 = centerY + (normY / dist) * (dist + paddingY);
    }

    context.save();
    context.beginPath();


    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);

    context.closePath();

    context.clip();

    // Compute matrix transform
    var delta =  (u0 * v1)      + (v0 * u2)      + (u1 * v2)      - (v1 * u2)      - (v0 * u1)      - (u0 * v2);
    var deltaA = (x0 * v1)      + (v0 * x2)      + (x1 * v2)      - (v1 * x2)      - (v0 * x1)      - (x0 * v2);
    var deltaB = (u0 * x1)      + (x0 * u2)      + (u1 * x2)      - (x1 * u2)      - (x0 * u1)      - (u0 * x2);
    var deltaC = (u0 * v1 * x2) + (v0 * x1 * u2) + (x0 * u1 * v2) - (x0 * v1 * u2) - (v0 * u1 * x2) - (u0 * x1 * v2);
    var deltaD = (y0 * v1)      + (v0 * y2)      + (y1 * v2)      - (v1 * y2)      - (v0 * y1)      - (y0 * v2);
    var deltaE = (u0 * y1)      + (y0 * u2)      + (u1 * y2)      - (y1 * u2)      - (y0 * u1)      - (u0 * y2);
    var deltaF = (u0 * v1 * y2) + (v0 * y1 * u2) + (y0 * u1 * v2) - (y0 * v1 * u2) - (v0 * u1 * y2) - (u0 * y1 * v2);

    context.transform(deltaA / delta, deltaD / delta,
        deltaB / delta, deltaE / delta,
        deltaC / delta, deltaF / delta);

    context.drawImage(textureSource, 0, 0);
    context.restore();
};



/**
 * Renders a flat strip
 *
 * @param strip {Strip} The Strip to render
 * @private
 */
Strip.prototype.renderStripFlat = function (strip) {
    var context = this.context;
    var vertices = strip.vertices;

    var length = vertices.length/2;
    // this.count++;

    context.beginPath();
    for (var i=1; i < length-2; i++) {
        // draw some triangles!
        var index = i*2;

        var x0 = vertices[index],   x1 = vertices[index+2], x2 = vertices[index+4];
        var y0 = vertices[index+1], y1 = vertices[index+3], y2 = vertices[index+5];

        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
    }

    context.fillStyle = '#FF0000';
    context.fill();
    context.closePath();
};

/*
Strip.prototype.setTexture = function (texture) {
    //TODO SET THE TEXTURES
    //TODO VISIBILITY

    // stop current texture
    this.texture = texture;
    this.width   = texture.frame.width;
    this.height  = texture.frame.height;
    this.updateFrame = true;
};
 */

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @param event
 * @private
 */

Strip.prototype.onTextureUpdate = function () {
    this.updateFrame = true;
};

/**
 * Returns the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @param matrix {Matrix} the transformation matrix of the sprite
 * @return {Rectangle} the framing rectangle
 */
Strip.prototype.getBounds = function (matrix) {
    var worldTransform = matrix || this.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var maxX = -Infinity;
    var maxY = -Infinity;

    var minX = Infinity;
    var minY = Infinity;

    var vertices = this.vertices;
    for (var i = 0, n = vertices.length; i < n; i += 2) {
        var rawX = vertices[i], rawY = vertices[i + 1];
        var x = (a * rawX) + (c * rawY) + tx;
        var y = (d * rawY) + (b * rawX) + ty;

        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;

        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
    }

    if (minX === -Infinity || maxY === Infinity) {
        return core.math.Rectangle.EMPTY;
    }

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.width = maxX - minX;

    bounds.y = minY;
    bounds.height = maxY - minY;

    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    this._currentBounds = bounds;

    return bounds;
};

/**
 * Different drawing buffer modes supported
 *
 * @static
 * @constant
 * @property {object} DrawModes
 * @property {number} DrawModes.TRIANGLE_STRIP
 * @property {number} DrawModes.TRIANGLES
 */
Strip.DrawModes = {
    TRIANGLE_STRIP: 0,
    TRIANGLES: 1
};

},{"../core":9}],54:[function(require,module,exports){
var core = require('../core');

/**
 * A tiling sprite is a fast way of rendering a tiling image
 *
 * @class
 * @extends Sprite
 * @namespace PIXI
 * @param texture {Texture} the texture of the tiling sprite
 * @param width {number}  the width of the tiling sprite
 * @param height {number} the height of the tiling sprite
 */
function TilingSprite(texture, width, height) {
    core.Sprite.call( this, texture);

    /**
     * The with of the tiling sprite
     *
     * @member {number}
     */
    this._width = width || 100;

    /**
     * The height of the tiling sprite
     *
     * @member {number}
     */
    this._height = height || 100;

    /**
     * The scaling of the image that is being tiled
     *
     * @member {Point}
     */
    this.tileScale = new core.math.Point(1,1);

    /**
     * A point that represents the scale of the texture object
     *
     * @member {Point}
     */
    this.tileScaleOffset = new core.math.Point(1,1);

    /**
     * The offset position of the image that is being tiled
     *
     * @member {Point}
     */
    this.tilePosition = new core.math.Point(0,0);

    /**
     * Whether this sprite is renderable or not
     *
     * @member {boolean}
     * @default true
     */
    this.renderable = true;

    /**
     * The tint applied to the sprite. This is a hex value
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    this.tint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the sprite
     *
     * @member {number}
     * @default blendModes.NORMAL;
     */
    this.blendMode = core.CONST.blendModes.NORMAL;
}

TilingSprite.prototype = Object.create(core.Sprite.prototype);
TilingSprite.prototype.constructor = TilingSprite;
module.exports = TilingSprite;


Object.defineProperties(TilingSprite.prototype, {
    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof TilingSprite#
     */
    width: {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        }
    },

    /**
     * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof TilingSprite#
     */
    height: {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        }
    },

    texture: {
        get: function () {
            return this._texture;
        },
        set: function (value) {
            if (this._texture === value) {
                return;
            }

            this._texture = value;
            this.refreshTexture = true;
            this.cachedTint = 0xFFFFFF;
        }
    }
});

/**
 * Renders the object using the WebGL renderer
 *
 * @param renderer {WebGLRenderer}
 */
TilingSprite.prototype.renderWebGL = function (renderer) {
    if (!this.visible || this.alpha <= 0) {
        return;
    }

    var i, j;

    if (this._mask) {
        renderer.spriteBatch.stop();
        renderer.maskManager.pushMask(this.mask, renderer);
        renderer.spriteBatch.start();
    }

    if (this._filters) {
        renderer.spriteBatch.flush();
        renderer.filterManager.pushFilter(this._filterBlock);
    }



    if (!this.tilingTexture || this.refreshTexture) {
        this.generateTilingTexture(true);

        if (this.tilingTexture && this.tilingTexture.needsUpdate) {
            //TODO - tweaking
            renderer.updateTexture(this.tilingTexture.baseTexture);
            this.tilingTexture.needsUpdate = false;
           // this.tilingTexture._uvs = null;
        }
    }
    else {
        renderer.spriteBatch.renderTilingSprite(this);
    }
    // simple render children!
    for (i=0,j=this.children.length; i<j; i++) {
        this.children[i].renderWebGL(renderer);
    }

    renderer.spriteBatch.stop();

    if (this._filters) {
        renderer.filterManager.popFilter();
    }

    if (this._mask) {
        renderer.maskManager.popMask(this._mask, renderer);
    }

    renderer.spriteBatch.start();
};

/**
 * Renders the object using the Canvas renderer
 *
 * @param renderer {CanvasRenderer}
 */
TilingSprite.prototype.renderCanvas = function (renderer) {
    if (!this.visible || this.alpha <= 0) {
        return;
    }

    var context = renderer.context;

    if (this._mask) {
        renderer.maskManager.pushMask(this._mask, context);
    }

    context.globalAlpha = this.worldAlpha;

    var transform = this.worldTransform;

    var i,j;

    var resolution = renderer.resolution;

    context.setTransform(transform.a * resolution,
                         transform.b * resolution,
                         transform.c * resolution,
                         transform.d * resolution,
                         transform.tx * resolution,
                         transform.ty * resolution);

    if (!this.__tilePattern ||  this.refreshTexture) {
        this.generateTilingTexture(false);

        if (this.tilingTexture) {
            this.__tilePattern = context.createPattern(this.tilingTexture.baseTexture.source, 'repeat');
        }
        else {
            return;
        }
    }

    // check blend mode
    if (this.blendMode !== renderer.currentBlendMode) {
        renderer.currentBlendMode = this.blendMode;
        context.globalCompositeOperation = renderer.blendModes[renderer.currentBlendMode];
    }

    var tilePosition = this.tilePosition;
    var tileScale = this.tileScale;

    tilePosition.x %= this.tilingTexture.baseTexture.width;
    tilePosition.y %= this.tilingTexture.baseTexture.height;

    // offset - make sure to account for the anchor point..
    context.scale(tileScale.x,tileScale.y);
    context.translate(tilePosition.x + (this.anchor.x * -this._width), tilePosition.y + (this.anchor.y * -this._height));

    context.fillStyle = this.__tilePattern;

    context.fillRect(-tilePosition.x,
                    -tilePosition.y,
                    this._width / tileScale.x,
                    this._height / tileScale.y);

    context.translate(-tilePosition.x + (this.anchor.x * this._width), -tilePosition.y + (this.anchor.y * this._height));
    context.scale(1 / tileScale.x, 1 / tileScale.y);

    if (this._mask) {
        renderer.maskManager.popMask(renderer.context);
    }

    for (i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].renderCanvas(renderer);
    }
};


/**
 * Returns the framing rectangle of the sprite as a Rectangle object
*
 * @return {Rectangle} the framing rectangle
 */
TilingSprite.prototype.getBounds = function () {
    var width = this._width;
    var height = this._height;

    var w0 = width * (1-this.anchor.x);
    var w1 = width * -this.anchor.x;

    var h0 = height * (1-this.anchor.y);
    var h1 = height * -this.anchor.y;

    var worldTransform = this.worldTransform;

    var a = worldTransform.a;
    var b = worldTransform.b;
    var c = worldTransform.c;
    var d = worldTransform.d;
    var tx = worldTransform.tx;
    var ty = worldTransform.ty;

    var x1 = a * w1 + c * h1 + tx;
    var y1 = d * h1 + b * w1 + ty;

    var x2 = a * w0 + c * h1 + tx;
    var y2 = d * h1 + b * w0 + ty;

    var x3 = a * w0 + c * h0 + tx;
    var y3 = d * h0 + b * w0 + ty;

    var x4 =  a * w1 + c * h0 + tx;
    var y4 =  d * h0 + b * w1 + ty;

    var minX,
        maxX,
        minY,
        maxY;

    minX = x1;
    minX = x2 < minX ? x2 : minX;
    minX = x3 < minX ? x3 : minX;
    minX = x4 < minX ? x4 : minX;

    minY = y1;
    minY = y2 < minY ? y2 : minY;
    minY = y3 < minY ? y3 : minY;
    minY = y4 < minY ? y4 : minY;

    maxX = x1;
    maxX = x2 > maxX ? x2 : maxX;
    maxX = x3 > maxX ? x3 : maxX;
    maxX = x4 > maxX ? x4 : maxX;

    maxY = y1;
    maxY = y2 > maxY ? y2 : maxY;
    maxY = y3 > maxY ? y3 : maxY;
    maxY = y4 > maxY ? y4 : maxY;

    var bounds = this._bounds;

    bounds.x = minX;
    bounds.width = maxX - minX;

    bounds.y = minY;
    bounds.height = maxY - minY;

    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate
    this._currentBounds = bounds;

    return bounds;
};

/**
 * When the texture is updated, this event will fire to update the scale and frame
 *
 * @param event
 * @private
 */
TilingSprite.prototype.onTextureUpdate = function () {
   // overriding the sprite version of this!
};

/**
 *
 * @param forcePowerOfTwo {boolean} Whether we want to force the texture to be a power of two
 */
TilingSprite.prototype.generateTilingTexture = function (forcePowerOfTwo) {
    if (!this.texture.baseTexture.hasLoaded) {
        return;
    }

    var texture = this.originalTexture || this.texture;
    var frame = texture.frame;
    var targetWidth, targetHeight;

    //  Check that the frame is the same size as the base texture.
    var isFrame = frame.width !== texture.baseTexture.width || frame.height !== texture.baseTexture.height;

    var newTextureRequired = false;

    if (!forcePowerOfTwo) {
        if (isFrame) {
            targetWidth = frame.width;
            targetHeight = frame.height;

            newTextureRequired = true;
        }
    }
    else {
        targetWidth = core.utils.getNextPowerOfTwo(frame.width);
        targetHeight = core.utils.getNextPowerOfTwo(frame.height);

        //  If the BaseTexture dimensions don't match the texture frame then we need a new texture anyway because it's part of a texture atlas
        if (frame.width !== targetWidth || frame.height !== targetHeight || texture.baseTexture.width !== targetWidth || texture.baseTexture.height || targetHeight) {
            newTextureRequired = true;
        }
    }

    if (newTextureRequired) {
        var canvasBuffer;

        if (this.tilingTexture && this.tilingTexture.isTiling) {
            canvasBuffer = this.tilingTexture.canvasBuffer;
            canvasBuffer.resize(targetWidth, targetHeight);
            this.tilingTexture.baseTexture.width = targetWidth;
            this.tilingTexture.baseTexture.height = targetHeight;
            this.tilingTexture.needsUpdate = true;
        }
        else {
            canvasBuffer = new core.CanvasBuffer(targetWidth, targetHeight);

            this.tilingTexture = core.Texture.fromCanvas(canvasBuffer.canvas);
            this.tilingTexture.canvasBuffer = canvasBuffer;
            this.tilingTexture.isTiling = true;
        }

        canvasBuffer.context.drawImage(texture.baseTexture.source,
                               texture.crop.x,
                               texture.crop.y,
                               texture.crop.width,
                               texture.crop.height,
                               0,
                               0,
                               targetWidth,
                               targetHeight);

        this.tileScaleOffset.x = frame.width / targetWidth;
        this.tileScaleOffset.y = frame.height / targetHeight;
    }
    else {
        //  TODO - switching?
        if (this.tilingTexture && this.tilingTexture.isTiling) {
            // destroy the tiling texture!
            // TODO could store this somewhere?
            this.tilingTexture.destroy(true);
        }

        this.tileScaleOffset.x = 1;
        this.tileScaleOffset.y = 1;
        this.tilingTexture = texture;
    }

    this.refreshTexture = false;

    this.originalTexture = this.texture;
    this.texture = this.tilingTexture;

    this.tilingTexture.baseTexture._powerOf2 = true;
};

},{"../core":9}],55:[function(require,module,exports){
/**
 * @file        Main export of the PIXI extras library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    MovieClip:      require('./MovieClip'),
    Rope:           require('./Rope'),
    Strip:          require('./Strip'),
    TilingSprite:   require('./TilingSprite')
};

},{"./MovieClip":51,"./Rope":52,"./Strip":53,"./TilingSprite":54}],56:[function(require,module,exports){
/**
 * This is the base class for creating a PIXI filter. Currently only WebGL supports filters.
 * If you want to make a custom filter this should be your base class.
 *
 * @class
 * @namespace PIXI
 * @param fragmentSrc {string|string[]} The fragment source in an array of strings.
 * @param uniforms {object} An object containing the uniforms for this filter.
 */
function AbstractFilter(fragmentSrc, uniforms) {
    /**
     * An array of passes - some filters contain a few steps this array simply stores the steps in a liniear fashion.
     * For example the blur filter has two passes blurX and blurY.
     *
     * @member {AbstractFilter[]}
     * @private
     */
    this.passes = [this];

    /**
     * @member {Shader[]}
     * @private
     */
    this.shaders = [];

    /**
     * @member {number}
     */
    this.padding = 0;

    /**
     * @member {object}
     * @private
     */
    this.uniforms = uniforms || {};

    /**
     * @member {string[]}
     * @private
     */
    this.fragmentSrc = typeof fragmentSrc === 'string' ? fragmentSrc.split('') : (fragmentSrc || []);
}

AbstractFilter.prototype.constructor = AbstractFilter;
module.exports = AbstractFilter;

/**
 * Syncs the uniforms between the class object and the shaders.
 *
 */
AbstractFilter.prototype.syncUniforms = function () {
    for (var i = 0, j = this.shaders.length; i < j; ++i) {
        this.shaders[i].dirty = true;
    }
};

/*
AbstractFilter.prototype.apply = function (frameBuffer) {
    // TODO :)
};
*/

},{}],57:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * The AlphaMaskFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used to offset the x and the g property of the texture is used to offset the y.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 * @param texture {Texture} The texture used for the displacement map * must be power of 2 texture at the moment
 */
function AlphaMaskFilter(texture) {
    AbstractFilter.call(this);

    texture.baseTexture._powerOf2 = true;

    // set the uniforms
    this.uniforms = {
        mask:           { type: 'sampler2D',    value: texture },
        mapDimensions:  { type: '2f',           value: { x: 1, y: 5112 } },
        dimensions:     { type: '4fv',          value: [0, 0, 0, 0] },
        offset:         { type: '2f',           value: { x: 0, y: 0 } }
    };

    if (texture.baseTexture.hasLoaded) {
        this.uniforms.mask.value.x = texture.width;
        this.uniforms.mask.value.y = texture.height;
    }
    else {
        this.boundLoadedFunction = this.onTextureLoaded.bind(this);

        texture.baseTexture.on('loaded', this.boundLoadedFunction);
    }

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform sampler2D uSampler;',
        'uniform sampler2D mask;',
        'uniform vec2 mapDimensions;',
        'uniform vec4 dimensions;',
        'uniform vec2 offset;',

        'void main() {',
        '   vec2 mapCords = vTextureCoord.xy;',
        '   mapCords += (dimensions.zw + offset)/ dimensions.xy ;',
        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',
        '   mapCords *= dimensions.xy / mapDimensions;',

        '   vec4 original =  texture2D(uSampler, vTextureCoord);',
        '   float maskAlpha =  texture2D(mask, mapCords).r;',
        '   original *= maskAlpha;',
        //'   original.rgb *= maskAlpha;',
        '   gl_FragColor =  original;',
        //'   gl_FragColor = gl_FragColor;',
        '}'
    ];
}

AlphaMaskFilter.prototype = Object.create(AbstractFilter.prototype);
AlphaMaskFilter.prototype.constructor = AlphaMaskFilter;
module.exports = AlphaMaskFilter;

/**
 * Sets the map dimensions uniforms when the texture becomes available.
 *
 */
AlphaMaskFilter.prototype.onTextureLoaded = function () {
    this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width;
    this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height;

    this.uniforms.mask.value.baseTexture.off('loaded', this.boundLoadedFunction);
};

Object.defineProperties(AlphaMaskFilter.prototype, {
    /**
     * The texture used for the displacement map. Must be power of 2 sized texture.
     *
     * @member {Texture}
     * @memberof AlphaMaskFilter#
     */
    map: {
        get: function () {
            return this.uniforms.mask.value;
        },
        set: function (value) {
            this.uniforms.mask.value = value;
        }
    },

    /**
     * The offset used to move the displacement map.
     *
     * @member {Point}
     * @memberof AlphaMaskFilter#
     */
    offset: {
        get: function() {
            return this.uniforms.offset.value;
        },
        set: function(value) {
            this.uniforms.offset.value = value;
        }
    }
});

},{"./AbstractFilter":56}],58:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * @author Vico @vicocotea
 * original shader : https://www.shadertoy.com/view/lssGDj by @movAX13h
 */

/**
 * An ASCII filter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function AsciiFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        dimensions: { type: '4fv', value: new Float32Array([10000, 100, 10, 10]) },
        pixelSize:  { type: '1f', value: 8}
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'uniform vec4 dimensions;',
        'uniform float pixelSize;',
        'uniform sampler2D uSampler;',

        'float character(float n, vec2 p)',
        '{',
        '    p = floor(p*vec2(4.0, -4.0) + 2.5);',
        '    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)',
        '    {',
        '        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;',
        '    }',
        '    return 0.0;',
        '}',

        'void main()',
        '{',
        '    vec2 uv = gl_FragCoord.xy;',
        '    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;',

        '    #ifdef HAS_GREENSCREEN',
        '    float gray = (col.r + col.b)/2.0;',
        '    #else',
        '    float gray = (col.r + col.g + col.b)/3.0;',
        '    #endif',

        '    float n =  65536.0;             // .',
        '    if (gray > 0.2) n = 65600.0;    // :',
        '    if (gray > 0.3) n = 332772.0;   // *',
        '    if (gray > 0.4) n = 15255086.0; // o',
        '    if (gray > 0.5) n = 23385164.0; // &',
        '    if (gray > 0.6) n = 15252014.0; // 8',
        '    if (gray > 0.7) n = 13199452.0; // @',
        '    if (gray > 0.8) n = 11512810.0; // #',

        '    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);',
        '    col = col * character(n, p);',

        '    gl_FragColor = vec4(col, 1.0);',
        '}'
    ];
}

AsciiFilter.prototype = Object.create(AbstractFilter.prototype);
AsciiFilter.prototype.constructor = AsciiFilter;
module.exports = AsciiFilter;

Object.defineProperties(AsciiFilter.prototype, {
    /**
     * The pixel size used by the filter.
     *
     * @member {number}
     * @memberof AsciiFilter#
     */
    size: {
        get: function () {
            return this.uniforms.pixelSize.value;
        },
        set: function (value) {
            this.uniforms.pixelSize.value = value;
        }
    }
});

},{"./AbstractFilter":56}],59:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter'),
    BlurXFilter = require('./BlurXFilter'),
    BlurYFilter = require('./BlurYFilter');

/**
 * The BlurFilter applies a Gaussian blur to an object.
 * The strength of the blur can be set for x- and y-axis separately.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function BlurFilter() {
    AbstractFilter.call(this);

    this.blurXFilter = new BlurXFilter();
    this.blurYFilter = new BlurYFilter();

    this.passes = [this.blurXFilter, this.blurYFilter];
}

BlurFilter.prototype = Object.create(AbstractFilter.prototype);
BlurFilter.prototype.constructor = BlurFilter;
module.exports = BlurFilter;

Object.defineProperties(BlurFilter.prototype, {
    /**
     * Sets the strength of both the blurX and blurY properties simultaneously
     *
     * @member {number}
     * @memberOf BlurFilter#
     * @default 2
     */
    blur: {
        get: function () {
            return this.blurXFilter.blur;
        },
        set: function (value) {
            this.blurXFilter.blur = this.blurYFilter.blur = value;
        }
    },

    /**
     * Sets the strength of the blurX property
     *
     * @member {number}
     * @memberOf BlurFilter#
     * @default 2
     */
    blurX: {
        get: function () {
            return this.blurXFilter.blur;
        },
        set: function (value) {
            this.blurXFilter.blur = value;
        }
    },

    /**
     * Sets the strength of the blurY property
     *
     * @member {number}
     * @memberOf BlurFilter#
     * @default 2
     */
    blurY: {
        get: function () {
            return this.blurYFilter.blur;
        },
        set: function (value) {
            this.blurYFilter.blur = value;
        }
    }
});

},{"./AbstractFilter":56,"./BlurXFilter":60,"./BlurYFilter":61}],60:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter'),
    blurFactor = 1 / 7000;

/**
 * The BlurXFilter applies a horizontal Gaussian blur to an object.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function BlurXFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        blur: { type: '1f', value: 1 / 512 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec4 sum = vec4(0.0);',

        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;',

        '   gl_FragColor = sum;',
        '}'
    ];
}

BlurXFilter.prototype = Object.create(AbstractFilter.prototype);
BlurXFilter.prototype.constructor = BlurXFilter;
module.exports = BlurXFilter;

Object.defineProperties(BlurXFilter.prototype, {
    /**
     * Sets the strength of both the blur.
     *
     * @member {number}
     * @memberof BlurXFilter#
     * @default 2
     */
    blur: {
        get: function () {
            return this.uniforms.blur.value / blurFactor;
        },
        set: function (value) {
            this.uniforms.blur.value = blurFactor * value;
        }
    }
});

},{"./AbstractFilter":56}],61:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter'),
    blurFactor = 1 / 7000;

/**
 * The BlurYFilter applies a vertical Gaussian blur to an object.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function BlurYFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        blur: { type: '1f', value: 1 / 512 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec4 sum = vec4(0.0);',

        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;',
        '   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;',

        '   gl_FragColor = sum;',
        '}'
    ];
}

BlurYFilter.prototype = Object.create(AbstractFilter.prototype);
BlurYFilter.prototype.constructor = BlurYFilter;
module.exports = BlurYFilter;

Object.defineProperties(BlurYFilter.prototype, {
    /**
     * Sets the strength of both the blur.
     *
     * @member {number}
     * @memberof BlurYFilter
     * @default 2
     */
    blur: {
        get: function () {
            return this.uniforms.blur.value / blurFactor;
        },
        set: function (value) {
            //this.padding = value;
            this.uniforms.blur.value = blurFactor * value;
        }
    }
});

},{"./AbstractFilter":56}],62:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * The ColorMatrixFilter class lets you apply a 4x4 matrix transformation on the RGBA
 * color and alpha values of every pixel on your displayObject to produce a result
 * with a new set of RGBA color and alpha values. It's pretty powerful!
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function ColorMatrixFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        matrix: { type: 'mat4', value: [1, 0, 0, 0,
                                        0, 1, 0, 0,
                                        0, 0, 1, 0,
                                        0, 0, 0, 1] }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float invert;',
        'uniform mat4 matrix;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;',
        '}'
    ];
}

ColorMatrixFilter.prototype = Object.create(AbstractFilter.prototype);
ColorMatrixFilter.prototype.constructor = ColorMatrixFilter;
module.exports = ColorMatrixFilter;

Object.defineProperties(ColorMatrixFilter.prototype, {
    /**
     * Sets the matrix of the color matrix filter
     *
     * @member {number[]}
     * @memberof ColorMatrixFilter#
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
     */
    matrix: {
        get: function () {
            return this.uniforms.matrix.value;
        },
        set: function (value) {
            this.uniforms.matrix.value = value;
        }
    }
});

},{"./AbstractFilter":56}],63:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * This lowers the color depth of your image by the given amount, producing an image with a smaller palette.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function ColorStepFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        step: { type: '1f', value: 5 }
    };

    this.fragmentSrc = [
        'precision mediump float;',
        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',
        'uniform sampler2D uSampler;',
        'uniform float step;',

        'void main(void) {',
        '   vec4 color = texture2D(uSampler, vTextureCoord);',
        '   color = floor(color * step) / step;',
        '   gl_FragColor = color;',
        '}'
    ];
}

ColorStepFilter.prototype = Object.create(AbstractFilter.prototype);
ColorStepFilter.prototype.constructor = ColorStepFilter;
module.exports = ColorStepFilter;

Object.defineProperties(ColorStepFilter.prototype, {
    /**
     * The number of steps to reduce the palette by.
     *
     * @member {number}
     * @memberof ColorStepFilter#
     */
    step: {
        get: function () {
            return this.uniforms.step.value;
        },
        set: function (value) {
            this.uniforms.step.value = value;
        }
    }
});

},{"./AbstractFilter":56}],64:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * The ConvolutionFilter class applies a matrix convolution filter effect.
 * A convolution combines pixels in the input image with neighboring pixels to produce a new image.
 * A wide variety of image effects can be achieved through convolutions, including blurring, edge
 * detection, sharpening, embossing, and beveling. The matrix should be specified as a 9 point Array.
 * See http://docs.gimp.org/en/plug-in-convmatrix.html for more info.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 * @param matrix {number[]} An array of values used for matrix transformation. Specified as a 9 point Array.
 * @param width {number} Width of the object you are transforming
 * @param height {number} Height of the object you are transforming
 */
function ConvolutionFilter(matrix, width, height) {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        matrix:     { type: '1fv', value: new Float32Array(matrix) },
        texelSizeX: { type: '1f', value: 1 / width },
        texelSizeY: { type: '1f', value: 1 / height }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying mediump vec2 vTextureCoord;',

        'uniform sampler2D texture;',
        'uniform float texelSizeX;',
        'uniform float texelSizeY;',
        'uniform float matrix[9];',

        'vec2 px = vec2(texelSizeX, texelSizeY);',

        'void main(void) {',
        '   vec4 c11 = texture2D(texture, vTextureCoord - px);', // top left
        '   vec4 c12 = texture2D(texture, vec2(vTextureCoord.x, vTextureCoord.y - px.y));', // top center
        '   vec4 c13 = texture2D(texture, vec2(vTextureCoord.x + px.x, vTextureCoord.y - px.y));', // top right

        '   vec4 c21 = texture2D(texture, vec2(vTextureCoord.x - px.x, vTextureCoord.y) );', // mid left
        '   vec4 c22 = texture2D(texture, vTextureCoord);', // mid center
        '   vec4 c23 = texture2D(texture, vec2(vTextureCoord.x + px.x, vTextureCoord.y) );', // mid right

        '   vec4 c31 = texture2D(texture, vec2(vTextureCoord.x - px.x, vTextureCoord.y + px.y) );', // bottom left
        '   vec4 c32 = texture2D(texture, vec2(vTextureCoord.x, vTextureCoord.y + px.y) );', // bottom center
        '   vec4 c33 = texture2D(texture, vTextureCoord + px );', // bottom right

        '   gl_FragColor = ',
        '       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +',
        '       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +',
        '       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];',
        '   gl_FragColor.a = c22.a;',
        '}'
    ];
}

ConvolutionFilter.prototype = Object.create(AbstractFilter.prototype);
ConvolutionFilter.prototype.constructor = ConvolutionFilter;
module.exports = ConvolutionFilter;

Object.defineProperties(ConvolutionFilter.prototype, {
    /**
     * An array of values used for matrix transformation. Specified as a 9 point Array.
     *
     * @member {number[]}
     * @memberof ConvolutionFilter#
     */
    matrix: {
        get: function () {
            return this.uniforms.matrix.value;
        },
        set: function (value) {
            this.uniforms.matrix.value = new Float32Array(value);
        }
    },

    /**
     * Width of the object you are transforming
     *
     * @member {number}
     * @memberof ConvolutionFilter#
     */
    width: {
        get: function () {
            return this.uniforms.texelSizeX.value;
        },
        set: function (value) {
            this.uniforms.texelSizeX.value = 1/value;
        }
    },

    /**
     * Height of the object you are transforming
     *
     * @member {number}
     * @memberof ConvolutionFilter#
     */
    height: {
        get: function () {
            return this.uniforms.texelSizeY.value;
        },
        set: function (value) {
            this.uniforms.texelSizeY.value = 1/value;
        }
    }
});

},{"./AbstractFilter":56}],65:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * A Cross Hatch effect filter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function CrossHatchFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        blur: { type: '1f', value: 1 / 512 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float blur;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);',

        '    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);',

        '    if (lum < 1.00) {',
        '        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.75) {',
        '        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.50) {',
        '        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',

        '    if (lum < 0.3) {',
        '        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {',
        '            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
        '        }',
        '    }',
        '}'
    ];
}

CrossHatchFilter.prototype = Object.create(AbstractFilter.prototype);
CrossHatchFilter.prototype.constructor = CrossHatchFilter;
module.exports = CrossHatchFilter;

Object.defineProperties(CrossHatchFilter.prototype, {
    /**
     * Sets the strength of both the blur.
     *
     * @member {number}
     * @memberof CrossHatchFilter#
     * @default 2
     */
    blur: {
        get: function () {
            return this.uniforms.blur.value / (1/7000);
        },
        set: function (value) {
            //this.padding = value;
            this.uniforms.blur.value = (1/7000) * value;
        }
    }
});

},{"./AbstractFilter":56}],66:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * The DisplacementFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g property of the texture is used to offset the y.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 * @param texture {Texture} The texture used for the displacement map * must be power of 2 texture at the moment
 */
function DisplacementFilter(texture) {
    AbstractFilter.call(this);

    texture.baseTexture._powerOf2 = true;

    // set the uniforms
    this.uniforms = {
        displacementMap: { type: 'sampler2D', value: texture },
        scale:           { type: '2f',  value: { x: 30, y: 30 } },
        offset:          { type: '2f',  value: { x: 0,  y: 0 } },
        mapDimensions:   { type: '2f',  value: { x: 1,  y: 5112 } },
        dimensions:      { type: '4fv', value: [0, 0, 0, 0] }
    };

    if (texture.baseTexture.hasLoaded) {
        this.onTextureLoaded();
    }
    else {
        this.boundLoadedFunction = this.onTextureLoaded.bind(this);

        texture.baseTexture.on('loaded', this.boundLoadedFunction);
    }

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform sampler2D displacementMap;',
        'uniform sampler2D uSampler;',
        'uniform vec2 scale;',
        'uniform vec2 offset;',
        'uniform vec4 dimensions;',
        'uniform vec2 mapDimensions;',// = vec2(256.0, 256.0);',
        // 'const vec2 textureDimensions = vec2(750.0, 750.0);',

        'void main(void) {',
        '   vec2 mapCords = vTextureCoord.xy;',
        '   mapCords += (dimensions.zw + offset)/ dimensions.xy ;',
        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',

        '   vec2 matSample = texture2D(displacementMap, mapCords).xy;',
        '   matSample -= 0.5;',
        '   matSample *= scale;',
        '   matSample /= mapDimensions;',

        '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));',

        //TODO: Is this needed?
        '   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);',
        '}'
    ];
}

DisplacementFilter.prototype = Object.create(AbstractFilter.prototype);
DisplacementFilter.prototype.constructor = DisplacementFilter;
module.exports = DisplacementFilter;

/**
 * Sets the map dimensions uniforms when the texture becomes available.
 *
 * @private
 */
DisplacementFilter.prototype.onTextureLoaded = function () {
    this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
    this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;

    this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};

Object.defineProperties(DisplacementFilter.prototype, {
    /**
     * The texture used for the displacement map. Must be power of 2 texture.
     *
     * @member {Texture}
     * @memberof DisplacementFilter#
     */
    map: {
        get: function () {
            return this.uniforms.displacementMap.value;
        },
        set: function (value) {
            this.uniforms.displacementMap.value = value;
        }
    },

    /**
     * The multiplier used to scale the displacement result from the map calculation.
     *
     * @member {Point}
     * @memberof DisplacementFilter#
     */
    scale: {
        get: function () {
            return this.uniforms.scale.value;
        },
        set: function (value) {
            this.uniforms.scale.value = value;
        }
    },

    /**
     * The offset used to move the displacement map.
     *
     * @member {Point}
     * @memberof DisplacementFilter#
     */
    offset: {
        get: function () {
            return this.uniforms.offset.value;
        },
        set: function (value) {
            this.uniforms.offset.value = value;
        }
    }
});

},{"./AbstractFilter":56}],67:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * original filter: https://github.com/evanw/glfx.js/blob/master/src/filters/fun/dotscreen.js
 */

/**
 * This filter applies a dotscreen effect making display objects appear to be made out of
 * black and white halftone dots like an old printer.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function DotScreenFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        scale:      { type: '1f', value: 1 },
        angle:      { type: '1f', value: 5 },
        dimensions: { type: '4fv', value: [0, 0, 0, 0] }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'uniform float angle;',
        'uniform float scale;',

        'float pattern() {',
        '   float s = sin(angle), c = cos(angle);',
        '   vec2 tex = vTextureCoord * dimensions.xy;',
        '   vec2 point = vec2(',
        '       c * tex.x - s * tex.y,',
        '       s * tex.x + c * tex.y',
        '   ) * scale;',
        '   return (sin(point.x) * sin(point.y)) * 4.0;',
        '}',

        'void main() {',
        '   vec4 color = texture2D(uSampler, vTextureCoord);',
        '   float average = (color.r + color.g + color.b) / 3.0;',
        '   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);',
        '}'
    ];
}

DotScreenFilter.prototype = Object.create(AbstractFilter.prototype);
DotScreenFilter.prototype.constructor = DotScreenFilter;
module.exports = DotScreenFilter;

Object.defineProperties(DotScreenFilter.prototype, {
    /**
     * The scale of the effect.
     * @member {number}
     * @memberof DotScreenFilter#
     */
    scale: {
        get: function () {
            return this.uniforms.scale.value;
        },
        set: function (value) {
            this.uniforms.scale.value = value;
        }
    },

    /**
     * The radius of the effect.
     * @member {number}
     * @memberof DotScreenFilter#
     */
    angle: {
        get: function () {
            return this.uniforms.angle.value;
        },
        set: function (value) {
            this.uniforms.angle.value = value;
        }
    }
});

},{"./AbstractFilter":56}],68:[function(require,module,exports){
/**
 * A target and pass info object for filters.
 *
 * @class
 * @namespace PIXI
 */
function FilterBlock() {
    /**
     * The visible state of this FilterBlock.
     *
     * @member {boolean}
     */
    this.visible = true;

    /**
     * The renderable state of this FilterBlock.
     *
     * @member {boolean}
     */
    this.renderable = true;
}

FilterBlock.prototype.constructor = FilterBlock;
module.exports = FilterBlock;

},{}],69:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * This greyscales the palette of your Display Objects.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function GrayFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        gray: { type: '1f', value: 1 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform sampler2D uSampler;',
        'uniform float gray;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);',
     //   '   gl_FragColor = gl_FragColor;',
        '}'
    ];
}

GrayFilter.prototype = Object.create(AbstractFilter.prototype);
GrayFilter.prototype.constructor = GrayFilter;
module.exports = GrayFilter;

Object.defineProperties(GrayFilter.prototype, {
    /**
     * The strength of the gray. 1 will make the object black and white, 0 will make the object its normal color.
     *
     * @member {number}
     * @memberof GrayFilter#
     */
    gray: {
        get: function () {
            return this.uniforms.gray.value;
        },
        set: function (value) {
            this.uniforms.gray.value = value;
        }
    }
});

},{"./AbstractFilter":56}],70:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * This inverts your Display Objects colors.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function InvertFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        invert: { type: '1f', value: 1 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float invert;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);',
        //'   gl_FragColor.rgb = gl_FragColor.rgb  * gl_FragColor.a;',
      //  '   gl_FragColor = gl_FragColor * vColor;',
        '}'
    ];
}

InvertFilter.prototype = Object.create(AbstractFilter.prototype);
InvertFilter.prototype.constructor = InvertFilter;
module.exports = InvertFilter;

Object.defineProperties(InvertFilter.prototype, {
    /**
     * The strength of the invert. 1 will fully invert the colors, 0 will make the object its normal color
     *
     * @member {number}
     * @memberof InvertFilter#
     */
    invert: {
        get: function () {
            return this.uniforms.invert.value;
        },
        set: function (value) {
            this.uniforms.invert.value = value;
        }
    }
});

},{"./AbstractFilter":56}],71:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * @author Vico @vicocotea
 * original filter: https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/noise.js
 */

/**
 * A Noise effect filter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function NoiseFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        noise: { type: '1f', value: 0.5 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float noise;',
        'uniform sampler2D uSampler;',

        'float rand(vec2 co) {',
        '    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);',
        '}',

        'void main() {',
        '    vec4 color = texture2D(uSampler, vTextureCoord);',

        '    float diff = (rand(vTextureCoord) - 0.5) * noise;',
        '    color.r += diff;',
        '    color.g += diff;',
        '    color.b += diff;',

        '    gl_FragColor = color;',
        '}'
    ];
}

NoiseFilter.prototype = Object.create(AbstractFilter.prototype);
NoiseFilter.prototype.constructor = NoiseFilter;
module.exports = NoiseFilter;

Object.defineProperties(NoiseFilter.prototype, {
    /**
     * The amount of noise to apply.
     *
     * @member {number}
     * @memberof NoiseFilter#
     * @default 0.5
     */
    noise: {
        get: function () {
            return this.uniforms.noise.value;
        },
        set: function (value) {
            this.dirty = true;
            this.uniforms.noise.value = value;
        }
    }
});

},{"./AbstractFilter":56}],72:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * The NormalMapFilter class uses the pixel values from the specified texture (called the displacement map) to perform a displacement of an object.
 * You can use this filter to apply all manor of crazy warping effects
 * Currently the r property of the texture is used offset the x and the g property of the texture is used to offset the y.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 * @param texture {Texture} The texture used for the normal map, must be power of 2 texture at the moment
 */
function NormalMapFilter(texture) {
    AbstractFilter.call(this);

    texture.baseTexture._powerOf2 = true;

    // set the uniforms
    this.uniforms = {
        displacementMap:  { type: 'sampler2D', value: texture },
        scale:            { type: '2f', value: { x: 15, y: 15 } },
        offset:           { type: '2f', value: { x: 0,  y: 0 } },
        mapDimensions:    { type: '2f', value: { x: 1,  y: 1 } },
        dimensions:       { type: '4f', value: [0, 0, 0, 0] },
        // LightDir:         { type: 'f3', value: [0, 1, 0] },
        LightPos:         { type: '3f', value: [0, 1, 0] }
    };

    if (texture.baseTexture.hasLoaded) {
        this.onTextureLoaded();
    }
    else {
        this.boundLoadedFunction = this.onTextureLoaded.bind(this);

        texture.baseTexture.on('loaded', this.boundLoadedFunction);
    }

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying float vColor;',

        'uniform sampler2D displacementMap;',
        'uniform sampler2D uSampler;',

        'uniform vec4 dimensions;',

        'const vec2 Resolution = vec2(1.0,1.0);',      //resolution of screen
        'uniform vec3 LightPos;',    //light position, normalized
        'const vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);',      //light RGBA -- alpha is intensity
        'const vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);',    //ambient RGBA -- alpha is intensity
        'const vec3 Falloff = vec3(0.0, 1.0, 0.2);',         //attenuation coefficients

        'uniform vec3 LightDir;',//' = vec3(1.0, 0.0, 1.0);',


        'uniform vec2 mapDimensions;',// = vec2(256.0, 256.0);',


        'void main(void) {',
        '   vec2 mapCords = vTextureCoord.xy;',

        '   vec4 color = texture2D(uSampler, vTextureCoord.st);',
        '   vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;',


        '   mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);',

        '   mapCords.y *= -1.0;',
        '   mapCords.y += 1.0;',

        //RGBA of our diffuse color
        '   vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);',

        //RGB of our normal map
        '   vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;',

        //The delta position of light
        //'vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);',
        '   vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);',
        //Correct for aspect ratio
        // '   LightDir.x *= Resolution.x / Resolution.y;',

        //Determine distance (used for attenuation) BEFORE we normalize our LightDir
        '   float D = length(LightDir);',

        //normalize our vectors
        '   vec3 N = normalize(NormalMap * 2.0 - 1.0);',
        '   vec3 L = normalize(LightDir);',

        //Pre-multiply light color with intensity
        //Then perform 'N dot L' to determine our diffuse term
        '   vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);',

        //pre-multiply ambient color with intensity
        '   vec3 Ambient = AmbientColor.rgb * AmbientColor.a;',

        //calculate attenuation
        '   float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );',

        //the calculation which brings it all together
        '   vec3 Intensity = Ambient + Diffuse * Attenuation;',
        '   vec3 FinalColor = DiffuseColor.rgb * Intensity;',
        '   gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);',
        // '   gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation);',//vColor * vec4(FinalColor, DiffuseColor.a);',

        /*// normalise color
        '   vec3 normal = normalize(nColor * 2.0 - 1.0);',

        '   vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );',

        '   float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);',

        '   float d = sqrt(dot(deltaPos, deltaPos));',
        '   float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );',

        '   vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;',
        '   result *= color.rgb;',

        '   gl_FragColor = vec4(result, 1.0);',*/
        '}'
    ];
}

NormalMapFilter.prototype = Object.create(AbstractFilter.prototype);
NormalMapFilter.prototype.constructor = NormalMapFilter;
module.exports = NormalMapFilter;

/**
 * Sets the map dimensions uniforms when the texture becomes available.
 *
 */
NormalMapFilter.prototype.onTextureLoaded = function () {
    this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width;
    this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height;

    this.uniforms.displacementMap.value.baseTexture.off('loaded', this.boundLoadedFunction);
};

Object.defineProperties(NormalMapFilter.prototype, {
    /**
     * The texture used for the displacement map. Must be power of 2 texture.
     *
     * @member {Texture}
     * @memberof NormalMapFilter#
     */
    map: {
        get: function () {
            return this.uniforms.displacementMap.value;
        },
        set: function (value) {
            this.uniforms.displacementMap.value = value;
        }
    },

    /**
     * The multiplier used to scale the displacement result from the map calculation.
     *
     * @member {Point}
     * @memberof NormalMapFilter#
     */
    scale: {
        get: function () {
            return this.uniforms.scale.value;
        },
        set: function (value) {
            this.uniforms.scale.value = value;
        }
    },

    /**
     * The offset used to move the displacement map.
     *
     * @member {Point}
     * @memberof NormalMapFilter#
     */
    offset: {
        get: function () {
            return this.uniforms.offset.value;
        },
        set: function (value) {
            this.uniforms.offset.value = value;
        }
    }
});

},{"./AbstractFilter":56}],73:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * This filter applies a pixelate effect making display objects appear 'blocky'.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function PixelateFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        invert:     { type: '1f',   value: 0 },
        dimensions: { type: '4fv',  value: new Float32Array([10000, 100, 10, 10]) },
        pixelSize:  { type: '2f',   value: { x: 10, y: 10 } }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform vec2 testDim;',
        'uniform vec4 dimensions;',
        'uniform vec2 pixelSize;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec2 coord = vTextureCoord;',

        '   vec2 size = dimensions.xy/pixelSize;',

        '   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;',
        '   gl_FragColor = texture2D(uSampler, color);',
        '}'
    ];
}

PixelateFilter.prototype = Object.create(AbstractFilter.prototype);
PixelateFilter.prototype.constructor = PixelateFilter;
module.exports = PixelateFilter;

Object.defineProperties(PixelateFilter.prototype, {
    /**
     * This a point that describes the size of the blocks. x is the width of the block and y is the height.
     *
     * @member {Point}
     * @memberof PixelateFilter#
     */
    size: {
        get: function () {
            return this.uniforms.pixelSize.value;
        },
        set: function (value) {
            this.uniforms.pixelSize.value = value;
        }
    }
});

},{"./AbstractFilter":56}],74:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * An RGB Split Filter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function RGBSplitFilter() {
    AbstractFilter.call(this);

    this.passes = [this];

    // set the uniforms
    this.uniforms = {
        red:        { type: '2f', value: { x: 20, y: 20 } },
        green:      { type: '2f', value: { x: -20, y: 20 } },
        blue:       { type: '2f', value: { x: 20, y: -20 } },
        dimensions: { type: '4fv', value: [0, 0, 0, 0] }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform vec2 red;',
        'uniform vec2 green;',
        'uniform vec2 blue;',
        'uniform vec4 dimensions;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;',
        '   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;',
        '   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;',
        '   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;',
        '}'
    ];
}

RGBSplitFilter.prototype = Object.create(AbstractFilter.prototype);
RGBSplitFilter.prototype.constructor = RGBSplitFilter;
module.exports = RGBSplitFilter;

Object.defineProperties(RGBSplitFilter.prototype, {
    /**
     * Red channel offset.
     *
     * @member {Point}
     * @memberof RGBSplitFilter#
     */
    red: {
        get: function () {
            return this.uniforms.red.value;
        },
        set: function (value) {
            this.uniforms.red.value = value;
        }
    },

    /**
     * Green channel offset.
     *
     * @member {Point}
     * @memberof RGBSplitFilter#
     */
    green: {
        get: function () {
            return this.uniforms.green.value;
        },
        set: function (value) {
            this.uniforms.green.value = value;
        }
    },

    /**
     * Blue offset.
     *
     * @member {Point}
     * @memberof RGBSplitFilter#
     */
    blue: {
        get: function () {
            return this.uniforms.blue.value;
        },
        set: function (value) {
            this.uniforms.blue.value = value;
        }
    }
});

},{"./AbstractFilter":56}],75:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * This applies a sepia effect to your Display Objects.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function SepiaFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        sepia: { type: '1f', value: 1 }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float sepia;',
        'uniform sampler2D uSampler;',

        'const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);',

        'void main(void) {',
        '   gl_FragColor = texture2D(uSampler, vTextureCoord);',
        '   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);',
        '}'
    ];
}

SepiaFilter.prototype = Object.create(AbstractFilter.prototype);
SepiaFilter.prototype.constructor = SepiaFilter;
module.exports = SepiaFilter;

Object.defineProperties(SepiaFilter.prototype, {
    /**
     * The strength of the sepia. 1 will apply the full sepia effect, 0 will make the object its normal color.
     *
     * @member {number}
     * @memberof SepiaFilter#
     */
    sepia: {
        get: function () {
            return this.uniforms.sepia.value;
        },
        set: function (value) {
            this.uniforms.sepia.value = value;
        }
    }
});

},{"./AbstractFilter":56}],76:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * A Smart Blur Filter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function SmartBlurFilter() {
    AbstractFilter.call(this);

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',

        'uniform sampler2D uSampler;',
        'const vec2 delta = vec2(1.0/10.0, 0.0);',

        'float random(vec3 scale, float seed) {',
        '   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);',
        '}',


        'void main(void) {',
        '   vec4 color = vec4(0.0);',
        '   float total = 0.0;',

        '   float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);',

        '   for (float t = -30.0; t <= 30.0; t++) {',
        '       float percent = (t + offset - 0.5) / 30.0;',
        '       float weight = 1.0 - abs(percent);',
        '       vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);',
        '       sample.rgb *= sample.a;',
        '       color += sample * weight;',
        '       total += weight;',
        '   }',

        '   gl_FragColor = color / total;',
        '   gl_FragColor.rgb /= gl_FragColor.a + 0.00001;',
        '}'
    ];
}

SmartBlurFilter.prototype = Object.create(AbstractFilter.prototype);
SmartBlurFilter.prototype.constructor = SmartBlurFilter;
module.exports = SmartBlurFilter;

},{"./AbstractFilter":56}],77:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter'),
    TiltShiftXFilter = require('./TiltShiftXFilter'),
    TiltShiftYFilter = require('./TiltShiftYFilter');

/**
 * @author Vico @vicocotea
 * original filter https://github.com/evanw/glfx.js/blob/master/src/filters/blur/tiltshift.js by Evan Wallace : http://madebyevan.com/
 */

/**
 * A TiltShift Filter. Manages the pass of both a TiltShiftXFilter and TiltShiftYFilter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function TiltShiftFilter() {
    AbstractFilter.call(this);

    this.tiltShiftXFilter = new TiltShiftXFilter();
    this.tiltShiftYFilter = new TiltShiftYFilter();

    this.tiltShiftXFilter.updateDelta();
    this.tiltShiftXFilter.updateDelta();

    this.passes = [this.tiltShiftXFilter, this.tiltShiftYFilter];
}

TiltShiftFilter.prototype = Object.create(AbstractFilter.prototype);
TiltShiftFilter.prototype.constructor = TiltShiftFilter;
module.exports = TiltShiftFilter;

Object.defineProperties(TiltShiftFilter.prototype, {
    /**
     * The strength of the blur.
     *
     * @member {number}
     * @memberof TiltShiftFilter#
     */
    blur: {
        get: function () {
            return this.tiltShiftXFilter.blur;
        },
        set: function (value) {
            this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = value;
        }
    },

    /**
     * The strength of the gradient blur.
     *
     * @member {number}
     * @memberof TiltShiftFilter#
     */
    gradientBlur: {
        get: function () {
            return this.tiltShiftXFilter.gradientBlur;
        },
        set: function (value) {
            this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = value;
        }
    },

    /**
     * The Y value to start the effect at.
     *
     * @member {number}
     * @memberof TiltShiftFilter#
     */
    start: {
        get: function () {
            return this.tiltShiftXFilter.start;
        },
        set: function (value) {
            this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = value;
        }
    },

    /**
     * The Y value to end the effect at.
     *
     * @member {number}
     * @memberof TiltShiftFilter#
     */
    end: {
        get: function () {
            return this.tiltShiftXFilter.end;
        },
        set: function (value) {
            this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = value;
        }
    },
});

},{"./AbstractFilter":56,"./TiltShiftXFilter":78,"./TiltShiftYFilter":79}],78:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * @author Vico @vicocotea
 * original filter https://github.com/evanw/glfx.js/blob/master/src/filters/blur/tiltshift.js by Evan Wallace : http://madebyevan.com/
 */

/**
 * A TiltShiftXFilter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function TiltShiftXFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        blur:           { type: '1f', value: 100 },
        gradientBlur:   { type: '1f', value: 600 },
        start:          { type: '2f', value: { x: 0,    y: window.screenHeight / 2 } },
        end:            { type: '2f', value: { x: 600,  y: window.screenHeight / 2 } },
        delta:          { type: '2f', value: { x: 30,   y: 30 } },
        texSize:        { type: '2f', value: { x: window.screenWidth, y: window.screenHeight } }
    };

    this.updateDelta();

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',

        'uniform sampler2D uSampler;',
        'uniform float blur;',
        'uniform float gradientBlur;',
        'uniform vec2 start;',
        'uniform vec2 end;',
        'uniform vec2 delta;',
        'uniform vec2 texSize;',

        'float random(vec3 scale, float seed) {',
        '   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);',
        '}',

        'void main(void) {',
        '    vec4 color = vec4(0.0);',
        '    float total = 0.0;',

        '    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);',
        '    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));',
        '    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;',

        '    for (float t = -30.0; t <= 30.0; t++) {',
        '        float percent = (t + offset - 0.5) / 30.0;',
        '        float weight = 1.0 - abs(percent);',
        '        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);',
        '        sample.rgb *= sample.a;',
        '        color += sample * weight;',
        '        total += weight;',
        '    }',

        '    gl_FragColor = color / total;',
        '    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;',
        '}'
    ];
}

TiltShiftXFilter.prototype = Object.create(AbstractFilter.prototype);
TiltShiftXFilter.prototype.constructor = TiltShiftXFilter;
module.exports = TiltShiftXFilter;

/**
 * Updates the filter delta values.
 *
 */
TiltShiftXFilter.prototype.updateDelta = function () {
    var dx = this.uniforms.end.value.x - this.uniforms.start.value.x;
    var dy = this.uniforms.end.value.y - this.uniforms.start.value.y;
    var d = Math.sqrt(dx * dx + dy * dy);

    this.uniforms.delta.value.x = dx / d;
    this.uniforms.delta.value.y = dy / d;
};


Object.defineProperties(TiltShiftXFilter.prototype, {
    /**
     * The strength of the blur.
     *
     * @member {number}
     * @memberof TilttShiftXFilter#
     */
    blur: {
        get: function () {
            return this.uniforms.blur.value;
        },
        set: function (value) {
            this.uniforms.blur.value = value;
        }
    },

    /**
     * The strength of the gradient blur.
     *
     * @member {number}
     * @memberof TilttShiftXFilter#
     */
    gradientBlur: {
        get: function () {
            return this.uniforms.gradientBlur.value;
        },
        set: function (value) {
            this.uniforms.gradientBlur.value = value;
        }
    },

    /**
     * The X value to start the effect at.
     *
     * @member {number}
     * @memberof TilttShiftXFilter#
     */
    start: {
        get: function () {
            return this.uniforms.start.value;
        },
        set: function (value) {
            this.uniforms.start.value = value;
            this.updateDelta();
        }
    },

    /**
     * The X value to end the effect at.
     *
     * @member {number}
     * @memberof TilttShiftXFilter#
     */
    end: {
        get: function () {
            return this.uniforms.end.value;
        },
        set: function (value) {
            this.uniforms.end.value = value;
            this.updateDelta();
        }
    }
});

},{"./AbstractFilter":56}],79:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * @author Vico @vicocotea
 * original filter https://github.com/evanw/glfx.js/blob/master/src/filters/blur/tiltshift.js by Evan Wallace : http://madebyevan.com/
 */

/**
 * A TiltShiftYFilter.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function TiltShiftYFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        blur:           { type: '1f', value: 100 },
        gradientBlur:   { type: '1f', value: 600 },
        start:          { type: '2f', value: { x: 0,    y: window.screenHeight / 2 } },
        end:            { type: '2f', value: { x: 600,  y: window.screenHeight / 2 } },
        delta:          { type: '2f', value: { x: 30,   y: 30 } },
        texSize:        { type: '2f', value: { x: window.screenWidth, y: window.screenHeight } }
    };

    this.updateDelta();

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',

        'uniform sampler2D uSampler;',
        'uniform float blur;',
        'uniform float gradientBlur;',
        'uniform vec2 start;',
        'uniform vec2 end;',
        'uniform vec2 delta;',
        'uniform vec2 texSize;',

        'float random(vec3 scale, float seed) {',
        '   return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);',
        '}',

        'void main(void) {',
        '    vec4 color = vec4(0.0);',
        '    float total = 0.0;',

        '    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);',
        '    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));',
        '    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;',

        '    for (float t = -30.0; t <= 30.0; t++) {',
        '        float percent = (t + offset - 0.5) / 30.0;',
        '        float weight = 1.0 - abs(percent);',
        '        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);',
        '        sample.rgb *= sample.a;',
        '        color += sample * weight;',
        '        total += weight;',
        '    }',

        '    gl_FragColor = color / total;',
        '    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;',
        '}'
    ];
}

TiltShiftYFilter.prototype = Object.create(AbstractFilter.prototype);
TiltShiftYFilter.prototype.constructor = TiltShiftYFilter;
module.exports = TiltShiftYFilter;

/**
 * Updates the filter delta values.
 *
 */
TiltShiftYFilter.prototype.updateDelta = function (){
    var dx = this.uniforms.end.value.x - this.uniforms.start.value.x;
    var dy = this.uniforms.end.value.y - this.uniforms.start.value.y;
    var d = Math.sqrt(dx * dx + dy * dy);
    this.uniforms.delta.value.x = -dy / d;
    this.uniforms.delta.value.y = dx / d;
};

Object.defineProperties(TiltShiftYFilter.prototype, {
    /**
     * The strength of the blur.
     *
     * @member {number}
     * @memberof TiltShiftYFilter#
     */
    blur: {
        get: function () {
            return this.uniforms.blur.value;
        },
        set: function (value) {
            this.uniforms.blur.value = value;
        }
    },

    /**
     * The strength of the gradient blur.
     *
     * @member {number}
     * @memberof TiltShiftYFilter#
     */
    gradientBlur: {
        get: function () {
            return this.uniforms.gradientBlur.value;
        },
        set: function (value) {
            this.uniforms.gradientBlur.value = value;
        }
    },

    /**
     * The Y value to start the effect at.
     *
     * @member {number}
     * @memberof TiltShiftYFilter#
     */
    start: {
        get: function () {
            return this.uniforms.start.value;
        },
        set: function (value) {
            this.uniforms.start.value = value;
            this.updateDelta();
        }
    },

    /**
     * The Y value to end the effect at.
     *
     * @member {number}
     * @memberof TiltShiftYFilter#
     */
    end: {
        get: function () {
            return this.uniforms.end.value;
        },
        set: function (value) {
            this.uniforms.end.value = value;
            this.updateDelta();
        }
    }
});

},{"./AbstractFilter":56}],80:[function(require,module,exports){
var AbstractFilter = require('./AbstractFilter');

/**
 * This filter applies a twist effect making display objects appear twisted in the given direction.
 *
 * @class
 * @extends AbstractFilter
 * @namespace PIXI
 */
function TwistFilter() {
    AbstractFilter.call(this);

    // set the uniforms
    this.uniforms = {
        radius:     { type: '1f', value: 0.5},
        angle:      { type: '1f', value: 5},
        offset:     { type: '2f', value: { x: 0.5, y: 0.5 } }
    };

    this.fragmentSrc = [
        'precision mediump float;',

        'varying vec2 vTextureCoord;',
        'varying vec4 vColor;',

        'uniform float radius;',
        'uniform float angle;',
        'uniform vec2 offset;',
        'uniform sampler2D uSampler;',

        'void main(void) {',
        '   vec2 coord = vTextureCoord - offset;',
        '   float distance = length(coord);',

        '   if (distance < radius) {',
        '       float ratio = (radius - distance) / radius;',
        '       float angleMod = ratio * ratio * angle;',
        '       float s = sin(angleMod);',
        '       float c = cos(angleMod);',
        '       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);',
        '   }',

        '   gl_FragColor = texture2D(uSampler, coord+offset);',
        '}'
    ];
}

TwistFilter.prototype = Object.create(AbstractFilter.prototype);
TwistFilter.prototype.constructor = TwistFilter;
module.exports = TwistFilter;

Object.defineProperties(TwistFilter.prototype, {
    /**
     * This point describes the the offset of the twist.
     *
     * @member {Point}
     * @memberof TwistFilter#
     */
    offset: {
        get: function () {
            return this.uniforms.offset.value;
        },
        set: function (value) {
            this.uniforms.offset.value = value;
        }
    },

    /**
     * This radius of the twist.
     *
     * @member {number}
     * @memberof TwistFilter#
     */
    radius: {
        get: function () {
            return this.uniforms.radius.value;
        },
        set: function (value) {
            this.uniforms.radius.value = value;
        }
    },

    /**
     * This angle of the twist.
     *
     * @member {number}
     * @memberof TwistFilter#
     */
    angle: {
        get: function () {
            return this.uniforms.angle.value;
        },
        set: function (value) {
            this.uniforms.angle.value = value;
        }
    }
});

},{"./AbstractFilter":56}],81:[function(require,module,exports){
/**
 * @file        Main export of the PIXI filters library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    AbstractFilter:     require('./AbstractFilter'),
    AlphaMaskFilter:    require('./AlphaMaskFilter'),
    AsciiFilter:        require('./AsciiFilter'),
    BlurFilter:         require('./BlurFilter'),
    BlurXFilter:        require('./BlurXFilter'),
    BlurYFilter:        require('./BlurYFilter'),
    ColorMatrixFilter:  require('./ColorMatrixFilter'),
    ColorStepFilter:    require('./ColorStepFilter'),
    ConvolutionFilter:  require('./ConvolutionFilter'),
    CrossHatchFilter:   require('./CrossHatchFilter'),
    DisplacementFilter: require('./DisplacementFilter'),
    DotScreenFilter:    require('./DotScreenFilter'),
    FilterBlock:        require('./FilterBlock'),
    GrayFilter:         require('./GrayFilter'),
    InvertFilter:       require('./InvertFilter'),
    NoiseFilter:        require('./NoiseFilter'),
    NormalMapFilter:    require('./NormalMapFilter'),
    PixelateFilter:     require('./PixelateFilter'),
    RGBSplitFilter:     require('./RGBSplitFilter'),
    SepiaFilter:        require('./SepiaFilter'),
    SmartBlurFilter:    require('./SmartBlurFilter'),
    TiltShiftFilter:    require('./TiltShiftFilter'),
    TiltShiftXFilter:   require('./TiltShiftXFilter'),
    TiltShiftYFilter:   require('./TiltShiftYFilter'),
    TwistFilter:        require('./TwistFilter')
};

},{"./AbstractFilter":56,"./AlphaMaskFilter":57,"./AsciiFilter":58,"./BlurFilter":59,"./BlurXFilter":60,"./BlurYFilter":61,"./ColorMatrixFilter":62,"./ColorStepFilter":63,"./ConvolutionFilter":64,"./CrossHatchFilter":65,"./DisplacementFilter":66,"./DotScreenFilter":67,"./FilterBlock":68,"./GrayFilter":69,"./InvertFilter":70,"./NoiseFilter":71,"./NormalMapFilter":72,"./PixelateFilter":73,"./RGBSplitFilter":74,"./SepiaFilter":75,"./SmartBlurFilter":76,"./TiltShiftFilter":77,"./TiltShiftXFilter":78,"./TiltShiftYFilter":79,"./TwistFilter":80}],82:[function(require,module,exports){
var core = require('../core');

/**
 * Holds all information related to an Interaction event
 *
 * @class
 * @namespace PIXI
 */
function InteractionData() {
    /**
     * This point stores the global coords of where the touch/mouse event happened
     *
     * @member {Point}
     */
    this.global = new core.math.Point();

    /**
     * The target Sprite that was interacted with
     *
     * @member {Sprite}
     */
    this.target = null;

    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     *
     * @member {Event}
     */
    this.originalEvent = null;
}

InteractionData.prototype.constructor = InteractionData;
module.exports = InteractionData;

/**
 * This will return the local coordinates of the specified displayObject for this InteractionData
 *
 * @param displayObject {DisplayObject} The DisplayObject that you would like the local coords off
 * @param [point] {Point} A Point object in which to store the value, optional (otherwise will create a new point)
 * @return {Point} A point containing the coordinates of the InteractionData position relative to the DisplayObject
 */
InteractionData.prototype.getLocalPosition = function (displayObject, point) {
    var worldTransform = displayObject.worldTransform;
    var global = this.global;

    // do a cheeky transform to get the mouse coords;
    var a00 = worldTransform.a, a01 = worldTransform.c, a02 = worldTransform.tx,
        a10 = worldTransform.b, a11 = worldTransform.d, a12 = worldTransform.ty,
        id = 1 / (a00 * a11 + a01 * -a10);

    point = point || new core.math.Point();

    point.x = a11 * id * global.x + -a01 * id * global.y + (a12 * a01 - a02 * a11) * id;
    point.y = a00 * id * global.y + -a10 * id * global.x + (-a12 * a00 + a02 * a10) * id;

    // set the mouse coords...
    return point;
};

},{"../core":9}],83:[function(require,module,exports){
var core = require('../core'),
    InteractionData = require('./InteractionData');

// TODO: Obviously rewrite this...
var INTERACTION_FREQUENCY = 30;
var AUTO_PREVENT_DEFAULT = true;

/**
 * The interaction manager deals with mouse and touch events. Any DisplayObject can be interactive
 * if its interactive parameter is set to true
 * This manager also supports multitouch.
 *
 * @class
 * @namespace PIXI
 * @param stage {Stage} The stage to handle interactions
 */
function InteractionManager(stage) {
    /**
     * A reference to the stage
     *
     * @member {Stage}
     */
    this.stage = stage;

    /**
     * The mouse data
     *
     * @member {InteractionData}
     */
    this.mouse = new InteractionData();

    /**
     * An object that stores current touches (InteractionData) by id reference
     *
     * @member {object}
     */
    this.touches = {};

    /**
     * @member {Point}
     * @private
     */
    this.tempPoint = new core.math.Point();

    /**
     * @member {boolean}
     * @default
     */
    this.mouseoverEnabled = true;

    /**
     * Tiny little interactiveData pool !
     *
     * @member {Array}
     */
    this.pool = [];

    /**
     * An array containing all the iterative items from the our interactive tree
     *
     * @member {Array}
     * @private
     */
    this.interactiveItems = [];

    /**
     * The DOM element to bind to.
     *
     * @member {HTMLElement}
     * @private
     */
    this.interactionDOMElement = null;

    /**
     * Have events been attached to the dom element?
     *
     * @member {boolean}
     * @private
     */
    this.eventsAdded = false;

    //this will make it so that you don't have to call bind all the time

    /**
     * @member {Function}
     */
    this.onMouseMove = this.onMouseMove.bind( this );

    /**
     * @member {Function}
     */
    this.onMouseDown = this.onMouseDown.bind(this);

    /**
     * @member {Function}
     */
    this.onMouseOut = this.onMouseOut.bind(this);

    /**
     * @member {Function}
     */
    this.onMouseUp = this.onMouseUp.bind(this);

    /**
     * @member {Function}
     */
    this.onTouchStart = this.onTouchStart.bind(this);

    /**
     * @member {Function}
     */
    this.onTouchEnd = this.onTouchEnd.bind(this);

    /**
     * @member {Function}
     */
    this.onTouchMove = this.onTouchMove.bind(this);

    /**
     * @member {number}
     */
    this.last = 0;

    /**
     * The css style of the cursor that is being used
     * @member {string}
     */
    this.currentCursorStyle = 'inherit';

    /**
     * Is set to true when the mouse is moved out of the canvas
     * @member {boolean}
     */
    this.mouseOut = false;

    /**
     * @member {number}
     */
    this.resolution = 1;

    // used for hit testing
    this._tempPoint = new core.math.Point();
}

InteractionManager.prototype.constructor = InteractionManager;
module.exports = InteractionManager;

/**
 * Collects an interactive sprite recursively to have their interactions managed
 *
 * @param displayObject {DisplayObject} the displayObject to collect
 * @param iParent {DisplayObject} the display object's parent
 * @private
 */
InteractionManager.prototype.collectInteractiveSprite = function (displayObject, iParent) {
    var children = displayObject.children;
    var length = children.length;

    // make an interaction tree... {item.__interactiveParent}
    for (var i = length - 1; i >= 0; i--) {
        var child = children[i];

        // push all interactive bits
        if (child._interactive) {
            iParent.interactiveChildren = true;
            //child.__iParent = iParent;
            this.interactiveItems.push(child);

            if (child.children.length > 0) {
                this.collectInteractiveSprite(child, child);
            }
        }
        else {
            child.__iParent = null;
            if (child.children.length > 0) {
                this.collectInteractiveSprite(child, iParent);
            }
        }

    }
};

/**
 * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
 * other DOM elements on top of the renderers Canvas element. With this you'll be bale to deletegate
 * another DOM element to receive those events.
 *
 * @param element {HTMLElement} the DOM element which will receive mouse and touch events.
 * @param [resolution=1] {number} THe resolution of the new element (relative to the canvas).
 * @private
 */
InteractionManager.prototype.setTargetElement = function (element, resolution) {
    this.removeEvents();

    this.interactionDOMElement = element;

    this.resolution = resolution || 1;

    this.addEvents();
};

/**
 *
 * @private
 */
InteractionManager.prototype.addEvents = function () {
    if (!this.interactionDOMElement) {
        return;
    }

    if (window.navigator.msPointerEnabled) {
        this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
        this.interactionDOMElement.style['-ms-touch-action'] = 'none';
    }

    this.interactionDOMElement.addEventListener('mousemove',    this.onMouseMove, true);
    this.interactionDOMElement.addEventListener('mousedown',    this.onMouseDown, true);
    this.interactionDOMElement.addEventListener('mouseout',     this.onMouseOut, true);

    this.interactionDOMElement.addEventListener('touchstart',   this.onTouchStart, true);
    this.interactionDOMElement.addEventListener('touchend',     this.onTouchEnd, true);
    this.interactionDOMElement.addEventListener('touchmove',    this.onTouchMove, true);

    window.addEventListener('mouseup',  this.onMouseUp, true);

    this.eventsAdded = true;
};

/**
 *
 * @private
 */
InteractionManager.prototype.removeEvents = function () {
    if (!this.interactionDOMElement) {
        return;
    }

    if (window.navigator.msPointerEnabled) {
        this.interactionDOMElement.style['-ms-content-zooming'] = '';
        this.interactionDOMElement.style['-ms-touch-action'] = '';
    }

    this.interactionDOMElement.removeEventListener('mousemove', this.onMouseMove, true);
    this.interactionDOMElement.removeEventListener('mousedown', this.onMouseDown, true);
    this.interactionDOMElement.removeEventListener('mouseout',  this.onMouseOut, true);

    this.interactionDOMElement.removeEventListener('touchstart', this.onTouchStart, true);
    this.interactionDOMElement.removeEventListener('touchend',  this.onTouchEnd, true);
    this.interactionDOMElement.removeEventListener('touchmove', this.onTouchMove, true);

    this.interactionDOMElement = null;

    window.removeEventListener('mouseup',  this.onMouseUp, true);

    this.eventsAdded = false;
};

/**
 * updates the state of interactive objects
 *
 * @private
 */
InteractionManager.prototype.update = function () {
    if (!this.interactionDOMElement) {
        return;
    }

    // frequency of 30fps??
    var now = Date.now();
    var diff = now - this.last;
    diff = (diff * INTERACTION_FREQUENCY ) / 1000;
    if (diff < 1) {
        return;
    }

    this.last = now;

    var i = 0;

    // ok.. so mouse events??
    // yes for now :)
    // OPTIMISE - how often to check??
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    // loop through interactive objects!
    var length = this.interactiveItems.length;
    var cursor = 'inherit';
    var over = false;

    for (i = 0; i < length; i++) {
        var item = this.interactiveItems[i];

        // OPTIMISATION - only calculate every time if the mousemove function exists..
        // OK so.. does the object have any other interactive functions?
        // hit-test the clip!
       // if (item.mouseover || item.mouseout || item.buttonMode)
       // {
        // ok so there are some functions so lets hit test it..
        item.__hit = this.hitTest(item, this.mouse);
        this.mouse.target = item;
        // ok so deal with interactions..
        // looks like there was a hit!
        if (item.__hit && !over) {
            if (item.buttonMode) {
                cursor = item.defaultCursor;
            }

            if (!item.interactiveChildren) {
                over = true;
            }

            if (!item.__isOver) {
                if (item.mouseover) {
                    item.mouseover (this.mouse);
                }
                item.__isOver = true;
            }
        }
        else {
            if (item.__isOver) {
                // roll out!
                if (item.mouseout) {
                    item.mouseout (this.mouse);
                }
                item.__isOver = false;
            }
        }
    }

    if (this.currentCursorStyle !== cursor) {
        this.currentCursorStyle = cursor;
        this.interactionDOMElement.style.cursor = cursor;
    }
};

/**
 * @private
 */
InteractionManager.prototype.rebuildInteractiveGraph = function () {
    this.dirty = false;

    var len = this.interactiveItems.length;

    for (var i = 0; i < len; i++) {
        this.interactiveItems[i].interactiveChildren = false;
    }

    this.interactiveItems.length = 0;

    if (this.stage.interactive) {
        this.interactiveItems.push(this.stage);
    }

    // Go through and collect all the objects that are interactive..
    this.collectInteractiveSprite(this.stage, this.stage);
};

/**
 * Is called when the mouse moves across the renderer element
 *
 * @param event {Event} The DOM event of the mouse moving
 * @private
 */
InteractionManager.prototype.onMouseMove = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event;

    // TODO optimize by not check EVERY TIME! maybe half as often? //
    var rect = this.interactionDOMElement.getBoundingClientRect();

    this.mouse.global.x = (event.clientX - rect.left) * (this.interactionDOMElement.width / rect.width) / this.resolution;
    this.mouse.global.y = (event.clientY - rect.top) * ( this.interactionDOMElement.height / rect.height) / this.resolution;

    var length = this.interactiveItems.length;

    for (var i = 0; i < length; i++) {
        var item = this.interactiveItems[i];

        // Call the function!
        if (item.mousemove) {
            item.mousemove(this.mouse);
        }
    }
};

/**
 * Is called when the mouse button is pressed down on the renderer element
 *
 * @param event {Event} The DOM event of a mouse button being pressed down
 * @private
 */
InteractionManager.prototype.onMouseDown = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event;

    if (AUTO_PREVENT_DEFAULT) {
        this.mouse.originalEvent.preventDefault();
    }

    // loop through interaction tree...
    // hit test each item! ->
    // get interactive items under point??
    //stage.__i
    var length = this.interactiveItems.length;

    var e = this.mouse.originalEvent;
    var isRightButton = e.button === 2 || e.which === 3;
    var downFunction = isRightButton ? 'rightdown' : 'mousedown';
    var clickFunction = isRightButton ? 'rightclick' : 'click';
    var buttonIsDown = isRightButton ? '__rightIsDown' : '__mouseIsDown';
    var isDown = isRightButton ? '__isRightDown' : '__isDown';

    // while
    // hit test
    for (var i = 0; i < length; i++) {
        var item = this.interactiveItems[i];

        if (item[downFunction] || item[clickFunction]) {
            item[buttonIsDown] = true;
            item.__hit = this.hitTest(item, this.mouse);

            if (item.__hit) {
                //call the function!
                if (item[downFunction]) {
                    item[downFunction](this.mouse);
                }
                item[isDown] = true;

                // just the one!
                if (!item.interactiveChildren) {
                    break;
                }
            }
        }
    }
};

/**
 * Is called when the mouse is moved out of the renderer element
 *
 * @param event {Event} The DOM event of a mouse being moved out
 * @private
 */
InteractionManager.prototype.onMouseOut = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event;

    var length = this.interactiveItems.length;

    this.interactionDOMElement.style.cursor = 'inherit';

    for (var i = 0; i < length; i++) {
        var item = this.interactiveItems[i];
        if (item.__isOver) {
            this.mouse.target = item;
            if (item.mouseout) {
                item.mouseout(this.mouse);
            }
            item.__isOver = false;
        }
    }

    this.mouseOut = true;

    // move the mouse to an impossible position
    this.mouse.global.x = -10000;
    this.mouse.global.y = -10000;
};

/**
 * Is called when the mouse button is released on the renderer element
 *
 * @param event {Event} The DOM event of a mouse button being released
 * @private
 */
InteractionManager.prototype.onMouseUp = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    this.mouse.originalEvent = event;

    var length = this.interactiveItems.length;
    var up = false;

    var e = this.mouse.originalEvent;
    var isRightButton = e.button === 2 || e.which === 3;

    var upFunction = isRightButton ? 'rightup' : 'mouseup';
    var clickFunction = isRightButton ? 'rightclick' : 'click';
    var upOutsideFunction = isRightButton ? 'rightupoutside' : 'mouseupoutside';
    var isDown = isRightButton ? '__isRightDown' : '__isDown';

    for (var i = 0; i < length; i++) {
        var item = this.interactiveItems[i];

        if (item[clickFunction] || item[upFunction] || item[upOutsideFunction]) {
            item.__hit = this.hitTest(item, this.mouse);

            if (item.__hit && !up) {
                //call the function!
                if (item[upFunction]) {
                    item[upFunction](this.mouse);
                }
                if (item[isDown]) {
                    if (item[clickFunction]) {
                        item[clickFunction](this.mouse);
                    }
                }

                if (!item.interactiveChildren) {
                    up = true;
                }
            }
            else {
                if (item[isDown]) {
                    if (item[upOutsideFunction]) {
                        item[upOutsideFunction](this.mouse);
                    }
                }
            }

            item[isDown] = false;
        }
    }
};

/**
 * Tests if the current mouse coordinates hit a sprite
 *
 * @param item {DisplayObject} The displayObject to test for a hit
 * @param interactionData {InteractionData} The interactionData object to update in the case there is a hit
 * @private
 */
InteractionManager.prototype.hitTest = function (item, interactionData) {
    var global = interactionData.global;

    if (!item.worldVisible) {
        return false;
    }

    // map the global point to local space.
    item.worldTransform.applyInverse(global,  this._tempPoint);

    var x = this._tempPoint.x,
        y = this._tempPoint.y,
        i;

    interactionData.target = item;

    //a sprite or display object with a hit area defined
    if (item.hitArea && item.hitArea.contains) {
        return item.hitArea.contains(x, y);
    }
    // a sprite with no hitarea defined
    else if (item instanceof core.Sprite) {
        var width = item.texture.frame.width;
        var height = item.texture.frame.height;
        var x1 = -width * item.anchor.x;
        var y1;

        if (x > x1 && x < x1 + width) {
            y1 = -height * item.anchor.y;

            if (y > y1 && y < y1 + height) {
                // set the target property if a hit is true!
                return true;
            }
        }
    }
    else if (item instanceof core.Graphics) {
        var graphicsData = item.graphicsData;
        for (i = 0; i < graphicsData.length; i++) {
            var data = graphicsData[i];

            if (!data.fill) {
                continue;
            }

            // only deal with fills..
            if (data.shape) {
                if (data.shape.contains(x, y)) {
                    //interactionData.target = item;
                    return true;
                }
            }
        }
    }

    var length = item.children.length;

    for (i = 0; i < length; i++) {
        var tempItem = item.children[i];
        var hit = this.hitTest(tempItem, interactionData);
        if (hit) {
            // hmm.. TODO SET CORRECT TARGET?
            interactionData.target = item;
            return true;
        }
    }
    return false;
};

/**
 * Is called when a touch is moved across the renderer element
 *
 * @param event {Event} The DOM event of a touch moving across the renderer view
 * @private
 */
InteractionManager.prototype.onTouchMove = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    var rect = this.interactionDOMElement.getBoundingClientRect();
    var changedTouches = event.changedTouches;
    var touchData;
    var i = 0;

    for (i = 0; i < changedTouches.length; i++) {
        var touchEvent = changedTouches[i];
        touchData = this.touches[touchEvent.identifier];
        touchData.originalEvent = event;

        // update the touch position
        touchData.global.x = ( (touchEvent.clientX - rect.left) * (this.interactionDOMElement.width / rect.width) ) / this.resolution;
        touchData.global.y = ( (touchEvent.clientY - rect.top)  * (this.interactionDOMElement.height / rect.height) )  / this.resolution;
        if (navigator.isCocoonJS && !rect.left && !rect.top && !event.target.style.width && !event.target.style.height) {
            //Support for CocoonJS fullscreen scale modes
            touchData.global.x = touchEvent.clientX;
            touchData.global.y = touchEvent.clientY;
        }

        for (var j = 0; j < this.interactiveItems.length; j++) {
            var item = this.interactiveItems[j];
            if (item.touchmove && item.__touchData && item.__touchData[touchEvent.identifier]) {
                item.touchmove(touchData);
            }
        }
    }
};

/**
 * Is called when a touch is started on the renderer element
 *
 * @param event {Event} The DOM event of a touch starting on the renderer view
 * @private
 */
InteractionManager.prototype.onTouchStart = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    var rect = this.interactionDOMElement.getBoundingClientRect();

    if (AUTO_PREVENT_DEFAULT) {
        event.preventDefault();
    }

    var changedTouches = event.changedTouches;
    for (var i=0; i < changedTouches.length; i++) {
        var touchEvent = changedTouches[i];

        var touchData = this.pool.pop();
        if (!touchData) {
            touchData = new InteractionData();
        }

        touchData.originalEvent = event;

        this.touches[touchEvent.identifier] = touchData;
        touchData.global.x = ( (touchEvent.clientX - rect.left) * (this.interactionDOMElement.width / rect.width) ) / this.resolution;
        touchData.global.y = ( (touchEvent.clientY - rect.top)  * (this.interactionDOMElement.height / rect.height) ) / this.resolution;
        if (navigator.isCocoonJS && !rect.left && !rect.top && !event.target.style.width && !event.target.style.height) {
            //Support for CocoonJS fullscreen scale modes
            touchData.global.x = touchEvent.clientX;
            touchData.global.y = touchEvent.clientY;
        }

        var length = this.interactiveItems.length;

        for (var j = 0; j < length; j++) {
            var item = this.interactiveItems[j];

            if (item.touchstart || item.tap) {
                item.__hit = this.hitTest(item, touchData);

                if (item.__hit) {
                    //call the function!
                    if (item.touchstart) {
                        item.touchstart(touchData);
                    }

                    item.__isDown = true;
                    item.__touchData = item.__touchData || {};
                    item.__touchData[touchEvent.identifier] = touchData;

                    if (!item.interactiveChildren) {
                        break;
                    }
                }
            }
        }
    }
};

/**
 * Is called when a touch is ended on the renderer element
 *
 * @param event {Event} The DOM event of a touch ending on the renderer view
 * @private
 */
InteractionManager.prototype.onTouchEnd = function (event) {
    if (this.dirty) {
        this.rebuildInteractiveGraph();
    }

    var rect = this.interactionDOMElement.getBoundingClientRect();
    var changedTouches = event.changedTouches;

    for (var i=0; i < changedTouches.length; i++) {
        var touchEvent = changedTouches[i];
        var touchData = this.touches[touchEvent.identifier];
        var up = false;
        touchData.global.x = ( (touchEvent.clientX - rect.left) * (this.interactionDOMElement.width / rect.width) ) / this.resolution;
        touchData.global.y = ( (touchEvent.clientY - rect.top)  * (this.interactionDOMElement.height / rect.height) ) / this.resolution;
        if (navigator.isCocoonJS && !rect.left && !rect.top && !event.target.style.width && !event.target.style.height) {
            //Support for CocoonJS fullscreen scale modes
            touchData.global.x = touchEvent.clientX;
            touchData.global.y = touchEvent.clientY;
        }

        var length = this.interactiveItems.length;
        for (var j = 0; j < length; j++) {
            var item = this.interactiveItems[j];

            if (item.__touchData && item.__touchData[touchEvent.identifier]) {

                item.__hit = this.hitTest(item, item.__touchData[touchEvent.identifier]);

                // so this one WAS down...
                touchData.originalEvent = event;
                // hitTest??

                if (item.touchend || item.tap) {
                    if (item.__hit && !up) {
                        if (item.touchend) {
                            item.touchend(touchData);
                        }
                        if (item.__isDown && item.tap) {
                            item.tap(touchData);
                        }
                        if (!item.interactiveChildren) {
                            up = true;
                        }
                    }
                    else {
                        if (item.__isDown && item.touchendoutside) {
                            item.touchendoutside(touchData);
                        }
                    }

                    item.__isDown = false;
                }

                item.__touchData[touchEvent.identifier] = null;
            }
        }
        // remove the touch..
        this.pool.push(touchData);
        this.touches[touchEvent.identifier] = null;
    }
};

},{"../core":9,"./InteractionData":82}],84:[function(require,module,exports){
/**
 * @file        Main export of the PIXI interactions library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    InteractionData:    require('./InteractionData'),
    InteractionManager: require('./InteractionManager')
};

},{"./InteractionData":82,"./InteractionManager":83}],85:[function(require,module,exports){
var core = require('../core'),
    ImageLoader = require('./ImageLoader');

/**
 * The atlas file loader is used to load in Texture Atlas data and parse it. When loaded this class will dispatch a 'loaded' event. If loading fails this class will dispatch an 'error' event.
 *
 * To generate the data you can use http://www.codeandweb.com/texturepacker and publish in the 'JSON' format.
 *
 * It is highly recommended to use texture atlases (also know as 'sprite sheets') as it allowed sprites to be batched and drawn together for highly increased rendering speed.
 * Once the data has been loaded the frames are stored in the PIXI texture cache and can be accessed though Texture.fromFrameId() and Sprite.fromFrameId()
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param url {String} The url of the JSON file
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function AtlasLoader(url, crossorigin) {
    this.url = url;
    this.baseUrl = url.replace(/[^\/]*$/, '');
    this.crossorigin = crossorigin;
    this.loaded = false;
}

AtlasLoader.prototype.constructor = AtlasLoader;
module.exports = AtlasLoader;

core.utils.eventTarget.mixin(AtlasLoader.prototype);

 /**
 * Starts loading the JSON file
 *
 */
AtlasLoader.prototype.load = function () {
    this.ajaxRequest = new core.utils.AjaxRequest();
    this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this);

    this.ajaxRequest.open('GET', this.url, true);

    if (this.ajaxRequest.overrideMimeType) {
        this.ajaxRequest.overrideMimeType('application/json');
    }

    this.ajaxRequest.send(null);
};

/**
 * Invoked when the Atlas has fully loaded. Parses the JSON and builds the texture frames.
 *
 * @private
 */
AtlasLoader.prototype.onAtlasLoaded = function () {
    if (this.ajaxRequest.readyState === 4) {
        if (this.ajaxRequest.status === 200 || window.location.href.indexOf('http') === -1) {
            this.atlas = {
                meta : {
                    image : []
                },
                frames : []
            };
            var result = this.ajaxRequest.responseText.split(/\r?\n/);
            var lineCount = -3;

            var currentImageId = 0;
            var currentFrame = null;
            var nameInNextLine = false;

            var i = 0,
                j = 0,
                selfOnLoaded = this.onLoaded.bind(this);

            // parser without rotation support yet!
            for (i = 0; i < result.length; i++) {
                result[i] = result[i].replace(/^\s+|\s+$/g, '');

                if (result[i] === '') {
                    nameInNextLine = i+1;
                }

                if (result[i].length > 0) {
                    if (nameInNextLine === i) {
                        this.atlas.meta.image.push(result[i]);
                        currentImageId = this.atlas.meta.image.length - 1;
                        this.atlas.frames.push({});
                        lineCount = -3;
                    } else if (lineCount > 0) {
                        if (lineCount % 7 === 1) { // frame name
                            if (currentFrame != null) { //jshint ignore:line
                                this.atlas.frames[currentImageId][currentFrame.name] = currentFrame;
                            }
                            currentFrame = { name: result[i], frame : {} };
                        } else {
                            var text = result[i].split(' ');
                            if (lineCount % 7 === 3) { // position
                                currentFrame.frame.x = Number(text[1].replace(',', ''));
                                currentFrame.frame.y = Number(text[2]);
                            } else if (lineCount % 7 === 4) { // size
                                currentFrame.frame.w = Number(text[1].replace(',', ''));
                                currentFrame.frame.h = Number(text[2]);
                            } else if (lineCount % 7 === 5) { // real size
                                var realSize = {
                                    x : 0,
                                    y : 0,
                                    w : Number(text[1].replace(',', '')),
                                    h : Number(text[2])
                                };

                                if (realSize.w > currentFrame.frame.w || realSize.h > currentFrame.frame.h) {
                                    currentFrame.trimmed = true;
                                    currentFrame.realSize = realSize;
                                } else {
                                    currentFrame.trimmed = false;
                                }
                            }
                        }
                    }
                    lineCount++;
                }
            }

            if (currentFrame != null) { //jshint ignore:line
                this.atlas.frames[currentImageId][currentFrame.name] = currentFrame;
            }

            if (this.atlas.meta.image.length > 0) {
                this.images = [];
                for (j = 0; j < this.atlas.meta.image.length; j++) {
                    // sprite sheet
                    var textureUrl = this.baseUrl + this.atlas.meta.image[j];
                    var frameData = this.atlas.frames[j];
                    this.images.push(new ImageLoader(textureUrl, this.crossorigin));

                    for (i in frameData) {
                        var rect = frameData[i].frame;
                        if (rect) {
                            core.utils.TextureCache[i] = new core.Texture(this.images[j].texture.baseTexture, {
                                x: rect.x,
                                y: rect.y,
                                width: rect.w,
                                height: rect.h
                            });
                            if (frameData[i].trimmed) {
                                core.utils.TextureCache[i].realSize = frameData[i].realSize;
                                // trim in pixi not supported yet, todo update trim properties if it is done ...
                                core.utils.TextureCache[i].trim.x = 0;
                                core.utils.TextureCache[i].trim.y = 0;
                            }
                        }
                    }
                }

                this.currentImageId = 0;
                for (j = 0; j < this.images.length; j++) {
                    this.images[j].on('loaded', selfOnLoaded);
                }
                this.images[this.currentImageId].load();

            } else {
                this.onLoaded();
            }

        } else {
            this.onError();
        }
    }
};

/**
 * Invoked when json file has loaded.
 *
 * @private
 */
AtlasLoader.prototype.onLoaded = function () {
    if (this.images.length - 1 > this.currentImageId) {
        this.currentImageId++;
        this.images[this.currentImageId].load();
    } else {
        this.loaded = true;
        this.emit('loaded', { content: this });
    }
};

/**
 * Invoked when an error occurs.
 *
 * @private
 */
AtlasLoader.prototype.onError = function () {
    this.emit('error', { content: this });
};

},{"../core":9,"./ImageLoader":87}],86:[function(require,module,exports){
var core = require('../core'),
    ImageLoader = require('./ImageLoader');

/**
 * The xml loader is used to load in XML bitmap font data ('xml' or 'fnt')
 * To generate the data you can use http://www.angelcode.com/products/bmfont/
 * This loader will also load the image file as the data.
 * When loaded this class will dispatch a 'loaded' event
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param url {String} The url of the sprite sheet JSON file
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function BitmapFontLoader(url, crossorigin) {
    /**
     * The url of the bitmap font data
     *
     * @member {String}
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @member {boolean}
     */
    this.crossorigin = crossorigin;

    /**
     * The base url of the bitmap font data
     *
     * @member {String}
     * @readOnly
     */
    this.baseUrl = url.replace(/[^\/]*$/, '');

    /**
     * The texture of the bitmap font
     *
     * @member {Texture}
     */
    this.texture = null;
}

// constructor
BitmapFontLoader.prototype.constructor = BitmapFontLoader;
module.exports = BitmapFontLoader;

core.utils.eventTarget.mixin(BitmapFontLoader.prototype);

/**
 * Loads the XML font data
 *
 */
BitmapFontLoader.prototype.load = function () {
    this.ajaxRequest = new core.utils.AjaxRequest();
    this.ajaxRequest.onreadystatechange = this.onXMLLoaded.bind(this);

    this.ajaxRequest.open('GET', this.url, true);

    if (this.ajaxRequest.overrideMimeType) {
        this.ajaxRequest.overrideMimeType('application/xml');
    }

    this.ajaxRequest.send(null);
};

/**
 * Invoked when the XML file is loaded, parses the data.
 *
 * @private
 */
BitmapFontLoader.prototype.onXMLLoaded = function () {
    if (this.ajaxRequest.readyState === 4) {
        if (this.ajaxRequest.status === 200 || window.location.protocol.indexOf('http') === -1) {
            var responseXML = this.ajaxRequest.responseXML;
            if (!responseXML || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS) {
                if (typeof(window.DOMParser) === 'function') {
                    var domparser = new DOMParser();
                    responseXML = domparser.parseFromString(this.ajaxRequest.responseText, 'text/xml');
                } else {
                    var div = document.createElement('div');
                    div.innerHTML = this.ajaxRequest.responseText;
                    responseXML = div;
                }
            }

            var textureUrl = this.baseUrl + responseXML.getElementsByTagName('page')[0].getAttribute('file');
            var image = new ImageLoader(textureUrl, this.crossorigin);
            this.texture = image.texture.baseTexture;

            var data = {};
            var info = responseXML.getElementsByTagName('info')[0];
            var common = responseXML.getElementsByTagName('common')[0];
            data.font = info.getAttribute('face');
            data.size = parseInt(info.getAttribute('size'), 10);
            data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10);
            data.chars = {};

            //parse letters
            var letters = responseXML.getElementsByTagName('char');

            for (var i = 0; i < letters.length; i++) {
                var charCode = parseInt(letters[i].getAttribute('id'), 10);

                var textureRect = new core.math.Rectangle(
                    parseInt(letters[i].getAttribute('x'), 10),
                    parseInt(letters[i].getAttribute('y'), 10),
                    parseInt(letters[i].getAttribute('width'), 10),
                    parseInt(letters[i].getAttribute('height'), 10)
                );

                data.chars[charCode] = {
                    xOffset: parseInt(letters[i].getAttribute('xoffset'), 10),
                    yOffset: parseInt(letters[i].getAttribute('yoffset'), 10),
                    xAdvance: parseInt(letters[i].getAttribute('xadvance'), 10),
                    kerning: {},
                    texture: core.utils.TextureCache[charCode] = new core.Texture(this.texture, textureRect)

                };
            }

            //parse kernings
            var kernings = responseXML.getElementsByTagName('kerning');
            for (i = 0; i < kernings.length; i++) {
                var first = parseInt(kernings[i].getAttribute('first'), 10);
                var second = parseInt(kernings[i].getAttribute('second'), 10);
                var amount = parseInt(kernings[i].getAttribute('amount'), 10);

                data.chars[second].kerning[first] = amount;

            }

            core.BitmapText.fonts[data.font] = data;

            image.addEventListener('loaded', this.onLoaded.bind(this));
            image.load();
        }
    }
};

/**
 * Invoked when all files are loaded (xml/fnt and texture)
 *
 * @private
 */
BitmapFontLoader.prototype.onLoaded = function () {
    this.emit('loaded', { content: this });
};

},{"../core":9,"./ImageLoader":87}],87:[function(require,module,exports){
var core = require('../core');

/**
 * The image loader class is responsible for loading images file formats ('jpeg', 'jpg', 'png' and 'gif')
 * Once the image has been loaded it is stored in the PIXI texture cache and can be accessed though Texture.fromFrame() and Sprite.fromFrame()
 * When loaded this class will dispatch a 'loaded' event
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param url {String} The url of the image
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function ImageLoader(url, crossorigin) {
    /**
     * The texture being loaded
     *
     * @member {Texture}
     */
    this.texture = core.Texture.fromImage(url, crossorigin);

    /**
     * if the image is loaded with loadFramedSpriteSheet
     * frames will contain the sprite sheet frames
     *
     * @member {Array}
     * @readOnly
     */
    this.frames = [];
}

// constructor
ImageLoader.prototype.constructor = ImageLoader;
module.exports = ImageLoader;

core.utils.eventTarget.mixin(ImageLoader.prototype);

/**
 * Loads image or takes it from cache
 *
 */
ImageLoader.prototype.load = function () {
    if (!this.texture.baseTexture.hasLoaded) {
        this.texture.baseTexture.on('loaded', this.onLoaded.bind(this));
        this.texture.baseTexture.on('error', this.onError.bind(this));
    }
    else {
        this.onLoaded();
    }
};

/**
 * Invoked when image file is loaded or it is already cached and ready to use
 *
 * @private
 */
ImageLoader.prototype.onLoaded = function () {
    this.emit('loaded', { content: this });
};

/**
 * Invoked when image file failed loading
 *
 * @method onError
 * @private
 */
ImageLoader.prototype.onError = function () {
    this.emit('error', { content: this });
};

/**
 * Loads image and split it to uniform sized frames
 *
 * @param frameWidth {number} width of each frame
 * @param frameHeight {number} height of each frame
 * @param textureName {String} if given, the frames will be cached in <textureName>-<ord> format
 */
ImageLoader.prototype.loadFramedSpriteSheet = function (frameWidth, frameHeight, textureName) {
    this.frames = [];

    var cols = Math.floor(this.texture.width / frameWidth);
    var rows = Math.floor(this.texture.height / frameHeight);

    var i=0;
    for (var y = 0; y < rows; ++y) {
        for (var x = 0; x < cols; ++x, ++i) {
            var texture = new core.Texture(
                this.texture.baseTexture,
                new core.math.Rectangle(
                    x * frameWidth,
                    y * frameHeight,
                    frameWidth,
                    frameHeight
                )
            );

            this.frames.push(texture);

            if (textureName) {
                core.utils.TextureCache[textureName + '-' + i] = texture;
            }
        }
    }

	this.load();
};

},{"../core":9}],88:[function(require,module,exports){
var core = require('../core'),
    spine = require('../spine/SpineRuntime'),
    ImageLoader = require('./ImageLoader'),
    SpineTextureLoader = require('./SpineTextureLoader');

/**
 * The json file loader is used to load in JSON data and parse it
 * When loaded this class will dispatch a 'loaded' event
 * If loading fails this class will dispatch an 'error' event
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param url {String} The url of the JSON file
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function JsonLoader(url, crossorigin) {
    /**
     * The url of the bitmap font data
     *
     * @member {String}
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @member {boolean}
     */
    this.crossorigin = crossorigin;

    /**
     * The base url of the bitmap font data
     *
     * @member {String}
     * @readOnly
     */
    this.baseUrl = url.replace(/[^\/]*$/, '');

    /**
     * Whether the data has loaded yet
     *
     * @member {boolean}
     * @readOnly
     */
     this.loaded = false;
}

// constructor
JsonLoader.prototype.constructor = JsonLoader;
module.exports = JsonLoader;

core.utils.eventTarget.mixin(JsonLoader.prototype);

/**
 * Loads the JSON data
 *
 */
JsonLoader.prototype.load = function () {
    if (window.XDomainRequest && this.crossorigin) {
        this.ajaxRequest = new window.XDomainRequest();

        // XDomainRequest has a few quirks. Occasionally it will abort requests
        // A way to avoid this is to make sure ALL callbacks are set even if not used
        // More info here: http://stackoverflow.com/questions/15786966/xdomainrequest-aborts-post-on-ie-9
        this.ajaxRequest.timeout = 3000;

        this.ajaxRequest.onerror = this.onError.bind(this);
        this.ajaxRequest.ontimeout = this.onError.bind(this);

        this.ajaxRequest.onprogress = function () {};

        this.ajaxRequest.onload = this.onJSONLoaded.bind(this);
    }
    else {
        if (window.XMLHttpRequest) {
            this.ajaxRequest = new window.XMLHttpRequest();
        }
        else {
            this.ajaxRequest = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        this.ajaxRequest.onreadystatechange = this.onReadyStateChanged.bind(this);
    }

    this.ajaxRequest.open('GET',this.url,true);

    this.ajaxRequest.send();
};

/**
 * Bridge function to be able to use the more reliable onreadystatechange in XMLHttpRequest.
 *
 * @private
 */
JsonLoader.prototype.onReadyStateChanged = function () {
    if (this.ajaxRequest.readyState === 4 && (this.ajaxRequest.status === 200 || window.location.href.indexOf('http') === -1)) {
        this.onJSONLoaded();
    }
};

/**
 * Invoke when JSON file is loaded
 *
 * @private
 */
JsonLoader.prototype.onJSONLoaded = function () {
    if (!this.ajaxRequest.responseText) {
        this.onError();
        return;
    }

    this.json = JSON.parse(this.ajaxRequest.responseText);

    if (this.json.frames) {
        // sprite sheet
        var textureUrl = this.baseUrl + this.json.meta.image;
        var image = new ImageLoader(textureUrl, this.crossorigin);
        var frameData = this.json.frames;

        this.texture = image.texture.baseTexture;
        image.addEventListener('loaded', this.onLoaded.bind(this));
        image.addEventListener('error', this.onError.bind(this));

        for (var i in frameData) {
            var rect = frameData[i].frame;

            if (rect) {
                var textureSize = new core.math.Rectangle(rect.x, rect.y, rect.w, rect.h);
                var crop = textureSize.clone();
                var trim = null;

                //  Check to see if the sprite is trimmed
                if (frameData[i].trimmed) {
                    var actualSize = frameData[i].sourceSize;
                    var realSize = frameData[i].spriteSourceSize;
                    trim = new core.math.Rectangle(realSize.x, realSize.y, actualSize.w, actualSize.h);
                }
                core.utils.TextureCache[i] = new core.Texture(this.texture, textureSize, crop, trim);
            }
        }

        image.load();

    }
    else if (this.json.bones) {
		// check if the json was loaded before
		if (core.utils.AnimCache[this.url]) {
			this.onLoaded();
		}
		else {
			/**
             * use a bit of hackery to load the atlas file, here we assume that the .json, .atlas and .png files
			 * that correspond to the spine file are in the same base URL and that the .json and .atlas files
			 * have the same name
			 */
			var atlasPath = this.url.substr(0, this.url.lastIndexOf('.')) + '.atlas';
			var atlasLoader = new JsonLoader(atlasPath, this.crossorigin);
			// save a copy of the current object for future reference //
			var originalLoader = this;
			// before loading the file, replace the "onJSONLoaded" function for our own //
			atlasLoader.onJSONLoaded = function () {
				// at this point "this" points at the atlasLoader (JsonLoader) instance //
				if (!this.ajaxRequest.responseText) {
					this.onError(); // FIXME: hmm, this is funny because we are not responding to errors yet
					return;
				}
				// create a new instance of a spine texture loader for this spine object //
				var textureLoader = new SpineTextureLoader(this.url.substring(0, this.url.lastIndexOf('/')));
				// create a spine atlas using the loaded text and a spine texture loader instance //
				var spineAtlas = new spine.Atlas(this.ajaxRequest.responseText, textureLoader);
				// now we use an atlas attachment loader //
				var attachmentLoader = new spine.AtlasAttachmentLoader(spineAtlas);
				// spine animation
				var spineJsonParser = new spine.SkeletonJson(attachmentLoader);
				var skeletonData = spineJsonParser.readSkeletonData(originalLoader.json);
				core.utils.AnimCache[originalLoader.url] = skeletonData;
				originalLoader.spine = skeletonData;
				originalLoader.spineAtlas = spineAtlas;
				originalLoader.spineAtlasLoader = atlasLoader;
				// wait for textures to finish loading if needed
				if (textureLoader.loadingCount > 0) {
					textureLoader.addEventListener('loadedBaseTexture', function (evt){
						if (evt.content.content.loadingCount <= 0) {
							originalLoader.onLoaded();
						}
					});
				}
				else {
					originalLoader.onLoaded();
				}
			};
			// start the loading //
			atlasLoader.load();
		}
    }
    else {
        this.onLoaded();
    }
};

/**
 * Invoke when json file loaded
 *
 * @private
 */
JsonLoader.prototype.onLoaded = function () {
    this.loaded = true;
    this.dispatchEvent({
        type: 'loaded',
        content: this
    });
};

/**
 * Invoke when error occured
 *
 * @private
 */
JsonLoader.prototype.onError = function () {

    this.dispatchEvent({
        type: 'error',
        content: this
    });
};

},{"../core":9,"../spine/SpineRuntime":94,"./ImageLoader":87,"./SpineTextureLoader":90}],89:[function(require,module,exports){
var core = require('../core'),
    JsonLoader = require('./JsonLoader');

/**
 * @author Mat Groves http://matgroves.com/ @Doormat23
 * based on pixi impact spine implementation made by Eemeli Kelokorpi (@ekelokorpi) https://github.com/ekelokorpi
 *
 * Awesome JS run time provided by EsotericSoftware
 * https://github.com/EsotericSoftware/spine-runtimes
 *
 */

/**
 * The Spine loader is used to load in JSON spine data
 * To generate the data you need to use http://esotericsoftware.com/ and export in the "JSON" format
 * Due to a clash of names  You will need to change the extension of the spine file from *.json to *.anim for it to load
 * See example 12 (http://www.goodboydigital.com/pixijs/examples/12/) to see a working example and check out the source
 * You will need to generate a sprite sheet to accompany the spine data
 * When loaded this class will dispatch a "loaded" event
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param url {String} The url of the JSON file
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function SpineLoader(url, crossorigin) {
    /**
     * The url of the bitmap font data
     *
     * @member {String}
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @member {boolean}
     */
    this.crossorigin = crossorigin;

    /**
     * Whether the data has loaded yet
     *
     * @member {boolean}
     * @readOnly
     */
    this.loaded = false;
}

SpineLoader.prototype.constructor = SpineLoader;
module.exports = SpineLoader;

core.utils.eventTarget.mixin(SpineLoader.prototype);

/**
 * Loads the JSON data
 *
 */
SpineLoader.prototype.load = function () {
    var scope = this;
    var jsonLoader = new JsonLoader(this.url, this.crossorigin);

    jsonLoader.on('loaded', function (event) {
        scope.json = event.data.content.json;
        scope.onLoaded();
    });

    jsonLoader.load();
};

/**
 * Invoked when JSON file is loaded.
 *
 * @private
 */
SpineLoader.prototype.onLoaded = function () {
    this.loaded = true;
    this.emit('loaded', { content: this });
};

},{"../core":9,"./JsonLoader":88}],90:[function(require,module,exports){
var core = require('../core');

/**
 * Supporting class to load images from spine atlases as per spine spec.
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param basePath {string} Tha base path where to look for the images to be loaded
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function SpineTextureLoader(basePath, crossorigin) {
    this.basePath = basePath;
    this.crossorigin = crossorigin;
    this.loadingCount = 0;
}

SpineTextureLoader.prototype.constructor = SpineTextureLoader;
module.exports = SpineTextureLoader;

core.utils.eventTarget.mixin(SpineTextureLoader.prototype);

/**
 * Starts loading a base texture as per spine specification
 *
 * @param page {spine.AtlasPage} Atlas page to which texture belongs
 * @param file {string} The file to load, this is just the file path relative to the base path configured in the constructor
 */
SpineTextureLoader.prototype.load = function (page, file) {
    page.rendererObject = core.BaseTexture.fromImage(this.basePath + '/' + file, this.crossorigin);
    if (!page.rendererObject.hasLoaded) {
        var scope = this;
        ++scope.loadingCount;
        page.rendererObject.addEventListener('loaded', function (){
            --scope.loadingCount;
            scope.dispatchEvent({
                type: 'loadedBaseTexture',
                content: scope
            });
        });
    }
};

/**
 * Unloads a previously loaded texture as per spine specification
 *
 * @param texture {BaseTexture} Texture object to destroy
 */
SpineTextureLoader.prototype.unload = function (texture) {
    texture.destroy(true);
};

},{"../core":9}],91:[function(require,module,exports){
var core = require('../core'),
    JsonLoader = require('./JsonLoader');

/**
 * The sprite sheet loader is used to load in JSON sprite sheet data
 * To generate the data you can use http://www.codeandweb.com/texturepacker and publish in the 'JSON' format
 * There is a free version so thats nice, although the paid version is great value for money.
 * It is highly recommended to use Sprite sheets (also know as a 'texture atlas') as it means sprites can be batched and drawn together for highly increased rendering speed.
 * Once the data has been loaded the frames are stored in the PIXI texture cache and can be accessed though Texture.fromFrameId() and Sprite.fromFrameId()
 * This loader will load the image file that the Spritesheet points to as well as the data.
 * When loaded this class will dispatch a 'loaded' event
 *
 * @class
 * @mixes eventTarget
 * @namespace PIXI
 * @param url {String} The url of the sprite sheet JSON file
 * @param crossorigin {boolean} Whether requests should be treated as crossorigin
 */
function SpriteSheetLoader(url, crossorigin) {

    /**
     * The url of the atlas data
     *
     * @member {String}
     */
    this.url = url;

    /**
     * Whether the requests should be treated as cross origin
     *
     * @member {boolean}
     */
    this.crossorigin = crossorigin;

    /**
     * The base url of the bitmap font data
     *
     * @member {String}
     * @readOnly
     */
    this.baseUrl = url.replace(/[^\/]*$/, '');

    /**
     * The texture being loaded
     *
     * @member {Texture}
     */
    this.texture = null;

    /**
     * The frames of the sprite sheet
     *
     * @member {object}
     */
    this.frames = {};
}

// constructor
SpriteSheetLoader.prototype.constructor = SpriteSheetLoader;
module.exports = SpriteSheetLoader;

core.utils.eventTarget.mixin(SpriteSheetLoader.prototype);

/**
 * This will begin loading the JSON file
 *
 */
SpriteSheetLoader.prototype.load = function () {
    var scope = this;
    var jsonLoader = new JsonLoader(this.url, this.crossorigin);

    jsonLoader.on('loaded', function (event) {
        scope.json = event.data.content.json;
        scope.onLoaded();
    });

    jsonLoader.load();
};

/**
 * Invoke when all files are loaded (json and texture)
 *
 * @private
 */
SpriteSheetLoader.prototype.onLoaded = function () {
    this.emit('loaded', {
        content: this
    });
};

},{"../core":9,"./JsonLoader":88}],92:[function(require,module,exports){
/**
 * @file        Main export of the PIXI loaders library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    AtlasLoader:        require('./AtlasLoader'),
    BitmapFontLoader:   require('./BitmapFontLoader'),
    ImageLoader:        require('./ImageLoader'),
    JsonLoader:         require('./JsonLoader'),
    SpineLoader:        require('./SpineLoader'),
    SpriteSheetLoader:  require('./SpriteSheetLoader')
};

},{"./AtlasLoader":85,"./BitmapFontLoader":86,"./ImageLoader":87,"./JsonLoader":88,"./SpineLoader":89,"./SpriteSheetLoader":91}],93:[function(require,module,exports){
var core = require('../core'),
    spine = require('./SpineRuntime');

/* Esoteric Software SPINE wrapper for pixi.js */

spine.Bone.yDown = true;

/**
 * A class that enables the you to import and run your spine animations in pixi.
 * Spine animation data needs to be loaded using the AssetLoader or SpineLoader before it can be used by this class
 * See example 12 (http://www.goodboydigital.com/pixijs/examples/12/) to see a working example and check out the source
 *
 * @class
 * @extends DisplayObjectContainer
 * @namespace PIXI
 * @param url {string} The url of the spine anim file to be used
 */
function Spine(url) {
    core.DisplayObjectContainer.call(this);

    this.spineData = core.utils.AnimCache[url];

    if (!this.spineData) {
        throw new Error('Spine data must be preloaded using SpineLoader or AssetLoader: ' + url);
    }

    this.skeleton = new spine.Skeleton(this.spineData);
    this.skeleton.updateWorldTransform();

    this.stateData = new spine.AnimationStateData(this.spineData);
    this.state = new spine.AnimationState(this.stateData);

    this.slotContainers = [];

    for (var i = 0, n = this.skeleton.drawOrder.length; i < n; i++) {
        var slot = this.skeleton.drawOrder[i];
        var attachment = slot.attachment;
        var slotContainer = new core.DisplayObjectContainer();
        this.slotContainers.push(slotContainer);
        this.addChild(slotContainer);

        if (attachment instanceof spine.RegionAttachment) {
            var spriteName = attachment.rendererObject.name;
            var sprite = this.createSprite(slot, attachment);
            slot.currentSprite = sprite;
            slot.currentSpriteName = spriteName;
            slotContainer.addChild(sprite);
        }
        else if (attachment instanceof spine.MeshAttachment) {
            var mesh = this.createMesh(slot, attachment);
            slot.currentMesh = mesh;
            slot.currentMeshName = attachment.name;
            slotContainer.addChild(mesh);
        }
        else {
            continue;
        }

    }

    this.autoUpdate = true;
}

Spine.prototype = Object.create(core.DisplayObjectContainer.prototype);
Spine.prototype.constructor = Spine;
module.exports = Spine;

Object.defineProperties(Spine.prototype, {
    /**
     * If this flag is set to true, the spine animation will be autoupdated every time
     * the object id drawn. The down side of this approach is that the delta time is
     * automatically calculated and you could miss out on cool effects like slow motion,
     * pause, skip ahead and the sorts. Most of these effects can be achieved even with
     * autoupdate enabled but are harder to achieve.
     *
     * @member {boolean}
     * @memberof Spine#
     * @default true
     */
    autoUpdate: {
        get: function () {
            return (this.updateTransform === Spine.prototype.autoUpdateTransform);
        },

        set: function (value) {
            this.updateTransform = value ? Spine.prototype.autoUpdateTransform : core.DisplayObjectContainer.prototype.updateTransform;
        }
    }
});

/**
 * Update the spine skeleton and its animations by delta time (dt)
 *
 * @param dt {number} Delta time. Time by which the animation should be updated
 */
Spine.prototype.update = function (dt) {
    this.state.update(dt);
    this.state.apply(this.skeleton);
    this.skeleton.updateWorldTransform();

    var drawOrder = this.skeleton.drawOrder;
    for (var i = 0, n = drawOrder.length; i < n; i++) {
        var slot = drawOrder[i];
        var attachment = slot.attachment;
        var slotContainer = this.slotContainers[i];

        if (!attachment) {
            slotContainer.visible = false;
            continue;
        }

        var type = attachment.type;
        if (type === spine.AttachmentType.region) {
            if (attachment.rendererObject) {
                if (!slot.currentSpriteName || slot.currentSpriteName !== attachment.rendererObject.name) {
                    var spriteName = attachment.rendererObject.name;
                    if (slot.currentSprite !== undefined) {
                        slot.currentSprite.visible = false;
                    }
                    slot.sprites = slot.sprites || {};
                    if (slot.sprites[spriteName] !== undefined) {
                        slot.sprites[spriteName].visible = true;
                    }
                    else {
                        var sprite = this.createSprite(slot, attachment);
                        slotContainer.addChild(sprite);
                    }
                    slot.currentSprite = slot.sprites[spriteName];
                    slot.currentSpriteName = spriteName;
                }
            }

            var bone = slot.bone;

            slotContainer.position.x = bone.worldX + attachment.x * bone.m00 + attachment.y * bone.m01;
            slotContainer.position.y = bone.worldY + attachment.x * bone.m10 + attachment.y * bone.m11;
            slotContainer.scale.x = bone.worldScaleX;
            slotContainer.scale.y = bone.worldScaleY;

            slotContainer.rotation = -(slot.bone.worldRotation * spine.degRad);

            slot.currentSprite.tint = core.utils.rgb2hex([slot.r,slot.g,slot.b]);
        }
        else if (type === spine.AttachmentType.skinnedmesh) {
            if (!slot.currentMeshName || slot.currentMeshName !== attachment.name) {
                var meshName = attachment.name;
                if (slot.currentMesh !== undefined) {
                    slot.currentMesh.visible = false;
                }

                slot.meshes = slot.meshes || {};

                if (slot.meshes[meshName] !== undefined) {
                    slot.meshes[meshName].visible = true;
                }
                else {
                    var mesh = this.createMesh(slot, attachment);
                    slotContainer.addChild(mesh);
                }

                slot.currentMesh = slot.meshes[meshName];
                slot.currentMeshName = meshName;
            }

            attachment.computeWorldVertices(slot.bone.skeleton.x, slot.bone.skeleton.y, slot, slot.currentMesh.vertices);

        }
        else {
            slotContainer.visible = false;
            continue;
        }
        slotContainer.visible = true;

        slotContainer.alpha = slot.a;
    }
};

/**
 * When autoupdate is set to yes this function is used as pixi's updateTransform function
 *
 * @private
 */
Spine.prototype.autoUpdateTransform = function () {
    this.lastTime = this.lastTime || Date.now();
    var timeDelta = (Date.now() - this.lastTime) * 0.001;
    this.lastTime = Date.now();

    this.update(timeDelta);

    core.DisplayObjectContainer.prototype.updateTransform.call(this);
};

/**
 * Create a new sprite to be used with spine.RegionAttachment
 *
 * @param slot {spine.Slot} The slot to which the attachment is parented
 * @param attachment {spine.RegionAttachment} The attachment that the sprite will represent
 * @private
 */
Spine.prototype.createSprite = function (slot, attachment) {
    var descriptor = attachment.rendererObject;
    var baseTexture = descriptor.page.rendererObject;
    var spriteRect = new core.math.Rectangle(descriptor.x,
                                        descriptor.y,
                                        descriptor.rotate ? descriptor.height : descriptor.width,
                                        descriptor.rotate ? descriptor.width : descriptor.height);
    var spriteTexture = new core.Texture(baseTexture, spriteRect);
    var sprite = new core.Sprite(spriteTexture);

    var baseRotation = descriptor.rotate ? Math.PI * 0.5 : 0.0;
    sprite.scale.set(descriptor.width / descriptor.originalWidth, descriptor.height / descriptor.originalHeight);
    sprite.rotation = baseRotation - (attachment.rotation * spine.degRad);
    sprite.anchor.x = sprite.anchor.y = 0.5;

    slot.sprites = slot.sprites || {};
    slot.sprites[descriptor.name] = sprite;
    return sprite;
};

/**
 *
 * @param slot {spine.Slot} The slot to which the attachment is parented
 * @param attachment {spine.RegionAttachment} The attachment that the sprite will represent
 * @private
 */
Spine.prototype.createMesh = function (slot, attachment) {
    var descriptor = attachment.rendererObject;
    var baseTexture = descriptor.page.rendererObject;
    var texture = new core.Texture(baseTexture);

    var strip = new core.Strip(texture);
    strip.drawMode = core.Strip.DrawModes.TRIANGLES;
    strip.canvasPadding = 1.5;

    strip.vertices = new Float32Array(attachment.uvs.length);
    strip.uvs = attachment.uvs;
    strip.indices = attachment.triangles;

    slot.meshes = slot.meshes || {};
    slot.meshes[attachment.name] = strip;

    return strip;
};

},{"../core":9,"./SpineRuntime":94}],94:[function(require,module,exports){
/******************************************************************************
 * Spine Runtimes Software License
 * Version 2.1
 *
 * Copyright (c) 2013, Esoteric Software
 * All rights reserved.
 *
 * You are granted a perpetual, non-exclusive, non-sublicensable and
 * non-transferable license to install, execute and perform the Spine Runtimes
 * Software (the "Software") solely for internal use. Without the written
 * permission of Esoteric Software (typically granted by licensing Spine), you
 * may not (a) modify, translate, adapt or otherwise create derivative works,
 * improvements of the Software or develop new applications using the Software
 * or (b) remove, delete, alter or obscure any trademarks or any copyright,
 * trademark, patent or other intellectual property or proprietary rights
 * notices on or in the Software, including any copy thereof. Redistributions
 * in binary or source form must include this license and terms.
 *
 * THIS SOFTWARE IS PROVIDED BY ESOTERIC SOFTWARE "AS IS" AND ANY EXPRESS OR
 * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL ESOTERIC SOFTARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/

var spine = module.exports = {
	radDeg: 180 / Math.PI,
	degRad: Math.PI / 180,
	temp: [],
    Float32Array: (typeof(Float32Array) === 'undefined') ? Array : Float32Array,
    Uint16Array: (typeof(Uint16Array) === 'undefined') ? Array : Uint16Array
};

spine.BoneData = function (name, parent) {
	this.name = name;
	this.parent = parent;
};
spine.BoneData.prototype = {
	length: 0,
	x: 0, y: 0,
	rotation: 0,
	scaleX: 1, scaleY: 1,
	inheritScale: true,
	inheritRotation: true,
	flipX: false, flipY: false
};

spine.SlotData = function (name, boneData) {
	this.name = name;
	this.boneData = boneData;
};
spine.SlotData.prototype = {
	r: 1, g: 1, b: 1, a: 1,
	attachmentName: null,
	additiveBlending: false
};

spine.IkConstraintData = function (name) {
	this.name = name;
	this.bones = [];
};
spine.IkConstraintData.prototype = {
	target: null,
	bendDirection: 1,
	mix: 1
};

spine.Bone = function (boneData, skeleton, parent) {
	this.data = boneData;
	this.skeleton = skeleton;
	this.parent = parent;
	this.setToSetupPose();
};
spine.Bone.yDown = false;
spine.Bone.prototype = {
	x: 0, y: 0,
	rotation: 0, rotationIK: 0,
	scaleX: 1, scaleY: 1,
	flipX: false, flipY: false,
	m00: 0, m01: 0, worldX: 0, // a b x
	m10: 0, m11: 0, worldY: 0, // c d y
	worldRotation: 0,
	worldScaleX: 1, worldScaleY: 1,
	worldFlipX: false, worldFlipY: false,
	updateWorldTransform: function () {
		var parent = this.parent;
		if (parent) {
			this.worldX = this.x * parent.m00 + this.y * parent.m01 + parent.worldX;
			this.worldY = this.x * parent.m10 + this.y * parent.m11 + parent.worldY;
			if (this.data.inheritScale) {
				this.worldScaleX = parent.worldScaleX * this.scaleX;
				this.worldScaleY = parent.worldScaleY * this.scaleY;
			} else {
				this.worldScaleX = this.scaleX;
				this.worldScaleY = this.scaleY;
			}
			this.worldRotation = this.data.inheritRotation ? (parent.worldRotation + this.rotationIK) : this.rotationIK;
			this.worldFlipX = parent.worldFlipX != this.flipX;
			this.worldFlipY = parent.worldFlipY != this.flipY;
		} else {
			var skeletonFlipX = this.skeleton.flipX, skeletonFlipY = this.skeleton.flipY;
			this.worldX = skeletonFlipX ? -this.x : this.x;
			this.worldY = (skeletonFlipY != spine.Bone.yDown) ? -this.y : this.y;
			this.worldScaleX = this.scaleX;
			this.worldScaleY = this.scaleY;
			this.worldRotation = this.rotationIK;
			this.worldFlipX = skeletonFlipX != this.flipX;
			this.worldFlipY = skeletonFlipY != this.flipY;
		}
		var radians = this.worldRotation * spine.degRad;
		var cos = Math.cos(radians);
		var sin = Math.sin(radians);
		if (this.worldFlipX) {
			this.m00 = -cos * this.worldScaleX;
			this.m01 = sin * this.worldScaleY;
		} else {
			this.m00 = cos * this.worldScaleX;
			this.m01 = -sin * this.worldScaleY;
		}
		if (this.worldFlipY != spine.Bone.yDown) {
			this.m10 = -sin * this.worldScaleX;
			this.m11 = -cos * this.worldScaleY;
		} else {
			this.m10 = sin * this.worldScaleX;
			this.m11 = cos * this.worldScaleY;
		}
	},
	setToSetupPose: function () {
		var data = this.data;
		this.x = data.x;
		this.y = data.y;
		this.rotation = data.rotation;
		this.rotationIK = this.rotation;
		this.scaleX = data.scaleX;
		this.scaleY = data.scaleY;
		this.flipX = data.flipX;
		this.flipY = data.flipY;
	},
	worldToLocal: function (world) {
		var dx = world[0] - this.worldX, dy = world[1] - this.worldY;
		var m00 = this.m00, m10 = this.m10, m01 = this.m01, m11 = this.m11;
		if (this.worldFlipX != (this.worldFlipY != spine.Bone.yDown)) {
			m00 = -m00;
			m11 = -m11;
		}
		var invDet = 1 / (m00 * m11 - m01 * m10);
		world[0] = dx * m00 * invDet - dy * m01 * invDet;
		world[1] = dy * m11 * invDet - dx * m10 * invDet;
	},
	localToWorld: function (local) {
		var localX = local[0], localY = local[1];
		local[0] = localX * this.m00 + localY * this.m01 + this.worldX;
		local[1] = localX * this.m10 + localY * this.m11 + this.worldY;
	}
};

spine.Slot = function (slotData, bone) {
	this.data = slotData;
	this.bone = bone;
	this.setToSetupPose();
};
spine.Slot.prototype = {
	r: 1, g: 1, b: 1, a: 1,
	_attachmentTime: 0,
	attachment: null,
	attachmentVertices: [],
	setAttachment: function (attachment) {
		this.attachment = attachment;
		this._attachmentTime = this.bone.skeleton.time;
		this.attachmentVertices.length = 0;
	},
	setAttachmentTime: function (time) {
		this._attachmentTime = this.bone.skeleton.time - time;
	},
	getAttachmentTime: function () {
		return this.bone.skeleton.time - this._attachmentTime;
	},
	setToSetupPose: function () {
		var data = this.data;
		this.r = data.r;
		this.g = data.g;
		this.b = data.b;
		this.a = data.a;

		var slotDatas = this.bone.skeleton.data.slots;
		for (var i = 0, n = slotDatas.length; i < n; i++) {
			if (slotDatas[i] == data) {
				this.setAttachment(!data.attachmentName ? null : this.bone.skeleton.getAttachmentBySlotIndex(i, data.attachmentName));
				break;
			}
		}
	}
};

spine.IkConstraint = function (data, skeleton) {
	this.data = data;
	this.mix = data.mix;
	this.bendDirection = data.bendDirection;

	this.bones = [];
	for (var i = 0, n = data.bones.length; i < n; i++)
		this.bones.push(skeleton.findBone(data.bones[i].name));
	this.target = skeleton.findBone(data.target.name);
};
spine.IkConstraint.prototype = {
	apply: function () {
		var target = this.target;
		var bones = this.bones;
		switch (bones.length) {
		case 1:
			spine.IkConstraint.apply1(bones[0], target.worldX, target.worldY, this.mix);
			break;
		case 2:
			spine.IkConstraint.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.mix);
			break;
		}
	}
};
/** Adjusts the bone rotation so the tip is as close to the target position as possible. The target is specified in the world
 * coordinate system. */
spine.IkConstraint.apply1 = function (bone, targetX, targetY, alpha) {
	var parentRotation = (!bone.data.inheritRotation || !bone.parent) ? 0 : bone.parent.worldRotation;
	var rotation = bone.rotation;
	var rotationIK = Math.atan2(targetY - bone.worldY, targetX - bone.worldX) * spine.radDeg - parentRotation;
	bone.rotationIK = rotation + (rotationIK - rotation) * alpha;
};
/** Adjusts the parent and child bone rotations so the tip of the child is as close to the target position as possible. The
 * target is specified in the world coordinate system.
 * @param child Any descendant bone of the parent. */
spine.IkConstraint.apply2 = function (parent, child, targetX, targetY, bendDirection, alpha) {
	var childRotation = child.rotation, parentRotation = parent.rotation;
	if (!alpha) {
		child.rotationIK = childRotation;
		parent.rotationIK = parentRotation;
		return;
	}
	var positionX, positionY, tempPosition = spine.temp;
	var parentParent = parent.parent;
	if (parentParent) {
		tempPosition[0] = targetX;
		tempPosition[1] = targetY;
		parentParent.worldToLocal(tempPosition);
		targetX = (tempPosition[0] - parent.x) * parentParent.worldScaleX;
		targetY = (tempPosition[1] - parent.y) * parentParent.worldScaleY;
	} else {
		targetX -= parent.x;
		targetY -= parent.y;
	}
	if (child.parent == parent) {
		positionX = child.x;
		positionY = child.y;
	} else {
		tempPosition[0] = child.x;
		tempPosition[1] = child.y;
		child.parent.localToWorld(tempPosition);
		parent.worldToLocal(tempPosition);
		positionX = tempPosition[0];
		positionY = tempPosition[1];
	}
	var childX = positionX * parent.worldScaleX, childY = positionY * parent.worldScaleY;
	var offset = Math.atan2(childY, childX);
	var len1 = Math.sqrt(childX * childX + childY * childY), len2 = child.data.length * child.worldScaleX;
	// Based on code by Ryan Juckett with permission: Copyright (c) 2008-2009 Ryan Juckett, http://www.ryanjuckett.com/
	var cosDenom = 2 * len1 * len2;
	if (cosDenom < 0.0001) {
		child.rotationIK = childRotation + (Math.atan2(targetY, targetX) * spine.radDeg - parentRotation - childRotation) * alpha;
		return;
	}
	var cos = (targetX * targetX + targetY * targetY - len1 * len1 - len2 * len2) / cosDenom;
	if (cos < -1)
		cos = -1;
	else if (cos > 1)
		cos = 1;
	var childAngle = Math.acos(cos) * bendDirection;
	var adjacent = len1 + len2 * cos, opposite = len2 * Math.sin(childAngle);
	var parentAngle = Math.atan2(targetY * adjacent - targetX * opposite, targetX * adjacent + targetY * opposite);
	var rotation = (parentAngle - offset) * spine.radDeg - parentRotation;
	if (rotation > 180)
		rotation -= 360;
	else if (rotation < -180) //
		rotation += 360;
	parent.rotationIK = parentRotation + rotation * alpha;
	rotation = (childAngle + offset) * spine.radDeg - childRotation;
	if (rotation > 180)
		rotation -= 360;
	else if (rotation < -180) //
		rotation += 360;
	child.rotationIK = childRotation + (rotation + parent.worldRotation - child.parent.worldRotation) * alpha;
};

spine.Skin = function (name) {
	this.name = name;
	this.attachments = {};
};
spine.Skin.prototype = {
	addAttachment: function (slotIndex, name, attachment) {
		this.attachments[slotIndex + ":" + name] = attachment;
	},
	getAttachment: function (slotIndex, name) {
		return this.attachments[slotIndex + ":" + name];
	},
	_attachAll: function (skeleton, oldSkin) {
		for (var key in oldSkin.attachments) {
			var colon = key.indexOf(":");
			var slotIndex = parseInt(key.substring(0, colon));
			var name = key.substring(colon + 1);
			var slot = skeleton.slots[slotIndex];
			if (slot.attachment && slot.attachment.name == name) {
				var attachment = this.getAttachment(slotIndex, name);
				if (attachment) slot.setAttachment(attachment);
			}
		}
	}
};

spine.Animation = function (name, timelines, duration) {
	this.name = name;
	this.timelines = timelines;
	this.duration = duration;
};
spine.Animation.prototype = {
	apply: function (skeleton, lastTime, time, loop, events) {
		if (loop && this.duration != 0) {
			time %= this.duration;
			lastTime %= this.duration;
		}
		var timelines = this.timelines;
		for (var i = 0, n = timelines.length; i < n; i++)
			timelines[i].apply(skeleton, lastTime, time, events, 1);
	},
	mix: function (skeleton, lastTime, time, loop, events, alpha) {
		if (loop && this.duration != 0) {
			time %= this.duration;
			lastTime %= this.duration;
		}
		var timelines = this.timelines;
		for (var i = 0, n = timelines.length; i < n; i++)
			timelines[i].apply(skeleton, lastTime, time, events, alpha);
	}
};
spine.Animation.binarySearch = function (values, target, step) {
	var low = 0;
	var high = Math.floor(values.length / step) - 2;
	if (!high) return step;
	var current = high >>> 1;
	while (true) {
		if (values[(current + 1) * step] <= target)
			low = current + 1;
		else
			high = current;
		if (low == high) return (low + 1) * step;
		current = (low + high) >>> 1;
	}
};
spine.Animation.binarySearch1 = function (values, target) {
	var low = 0;
	var high = values.length - 2;
	if (!high) return 1;
	var current = high >>> 1;
	while (true) {
		if (values[current + 1] <= target)
			low = current + 1;
		else
			high = current;
		if (low == high) return low + 1;
		current = (low + high) >>> 1;
	}
};
spine.Animation.linearSearch = function (values, target, step) {
	for (var i = 0, last = values.length - step; i <= last; i += step)
		if (values[i] > target) return i;
	return -1;
};

spine.Curves = function (frameCount) {
	this.curves = []; // type, x, y, ...
	//this.curves.length = (frameCount - 1) * 19/*BEZIER_SIZE*/;
};
spine.Curves.prototype = {
	setLinear: function (frameIndex) {
		this.curves[frameIndex * 19/*BEZIER_SIZE*/] = 0/*LINEAR*/;
	},
	setStepped: function (frameIndex) {
		this.curves[frameIndex * 19/*BEZIER_SIZE*/] = 1/*STEPPED*/;
	},
	/** Sets the control handle positions for an interpolation bezier curve used to transition from this keyframe to the next.
	 * cx1 and cx2 are from 0 to 1, representing the percent of time between the two keyframes. cy1 and cy2 are the percent of
	 * the difference between the keyframe's values. */
	setCurve: function (frameIndex, cx1, cy1, cx2, cy2) {
		var subdiv1 = 1 / 10/*BEZIER_SEGMENTS*/, subdiv2 = subdiv1 * subdiv1, subdiv3 = subdiv2 * subdiv1;
		var pre1 = 3 * subdiv1, pre2 = 3 * subdiv2, pre4 = 6 * subdiv2, pre5 = 6 * subdiv3;
		var tmp1x = -cx1 * 2 + cx2, tmp1y = -cy1 * 2 + cy2, tmp2x = (cx1 - cx2) * 3 + 1, tmp2y = (cy1 - cy2) * 3 + 1;
		var dfx = cx1 * pre1 + tmp1x * pre2 + tmp2x * subdiv3, dfy = cy1 * pre1 + tmp1y * pre2 + tmp2y * subdiv3;
		var ddfx = tmp1x * pre4 + tmp2x * pre5, ddfy = tmp1y * pre4 + tmp2y * pre5;
		var dddfx = tmp2x * pre5, dddfy = tmp2y * pre5;

		var i = frameIndex * 19/*BEZIER_SIZE*/;
		var curves = this.curves;
		curves[i++] = 2/*BEZIER*/;

		var x = dfx, y = dfy;
		for (var n = i + 19/*BEZIER_SIZE*/ - 1; i < n; i += 2) {
			curves[i] = x;
			curves[i + 1] = y;
			dfx += ddfx;
			dfy += ddfy;
			ddfx += dddfx;
			ddfy += dddfy;
			x += dfx;
			y += dfy;
		}
	},
	getCurvePercent: function (frameIndex, percent) {
		percent = percent < 0 ? 0 : (percent > 1 ? 1 : percent);
		var curves = this.curves;
		var i = frameIndex * 19/*BEZIER_SIZE*/;
		var type = curves[i];
		if (type === 0/*LINEAR*/) return percent;
		if (type == 1/*STEPPED*/) return 0;
		i++;
		var x = 0;
		for (var start = i, n = i + 19/*BEZIER_SIZE*/ - 1; i < n; i += 2) {
			x = curves[i];
			if (x >= percent) {
				var prevX, prevY;
				if (i == start) {
					prevX = 0;
					prevY = 0;
				} else {
					prevX = curves[i - 2];
					prevY = curves[i - 1];
				}
				return prevY + (curves[i + 1] - prevY) * (percent - prevX) / (x - prevX);
			}
		}
		var y = curves[i - 1];
		return y + (1 - y) * (percent - x) / (1 - x); // Last point is 1,1.
	}
};

spine.RotateTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, angle, ...
	this.frames.length = frameCount * 2;
};
spine.RotateTimeline.prototype = {
	boneIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 2;
	},
	setFrame: function (frameIndex, time, angle) {
		frameIndex *= 2;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = angle;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var bone = skeleton.bones[this.boneIndex];

		if (time >= frames[frames.length - 2]) { // Time is after last frame.
			var amount = bone.data.rotation + frames[frames.length - 1] - bone.rotation;
			while (amount > 180)
				amount -= 360;
			while (amount < -180)
				amount += 360;
			bone.rotation += amount * alpha;
			return;
		}

		// Interpolate between the previous frame and the current frame.
		var frameIndex = spine.Animation.binarySearch(frames, time, 2);
		var prevFrameValue = frames[frameIndex - 1];
		var frameTime = frames[frameIndex];
		var percent = 1 - (time - frameTime) / (frames[frameIndex - 2/*PREV_FRAME_TIME*/] - frameTime);
		percent = this.curves.getCurvePercent(frameIndex / 2 - 1, percent);

		var amount = frames[frameIndex + 1/*FRAME_VALUE*/] - prevFrameValue;
		while (amount > 180)
			amount -= 360;
		while (amount < -180)
			amount += 360;
		amount = bone.data.rotation + (prevFrameValue + amount * percent) - bone.rotation;
		while (amount > 180)
			amount -= 360;
		while (amount < -180)
			amount += 360;
		bone.rotation += amount * alpha;
	}
};

spine.TranslateTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, x, y, ...
	this.frames.length = frameCount * 3;
};
spine.TranslateTimeline.prototype = {
	boneIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 3;
	},
	setFrame: function (frameIndex, time, x, y) {
		frameIndex *= 3;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = x;
		this.frames[frameIndex + 2] = y;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var bone = skeleton.bones[this.boneIndex];

		if (time >= frames[frames.length - 3]) { // Time is after last frame.
			bone.x += (bone.data.x + frames[frames.length - 2] - bone.x) * alpha;
			bone.y += (bone.data.y + frames[frames.length - 1] - bone.y) * alpha;
			return;
		}

		// Interpolate between the previous frame and the current frame.
		var frameIndex = spine.Animation.binarySearch(frames, time, 3);
		var prevFrameX = frames[frameIndex - 2];
		var prevFrameY = frames[frameIndex - 1];
		var frameTime = frames[frameIndex];
		var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*PREV_FRAME_TIME*/] - frameTime);
		percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

		bone.x += (bone.data.x + prevFrameX + (frames[frameIndex + 1/*FRAME_X*/] - prevFrameX) * percent - bone.x) * alpha;
		bone.y += (bone.data.y + prevFrameY + (frames[frameIndex + 2/*FRAME_Y*/] - prevFrameY) * percent - bone.y) * alpha;
	}
};

spine.ScaleTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, x, y, ...
	this.frames.length = frameCount * 3;
};
spine.ScaleTimeline.prototype = {
	boneIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 3;
	},
	setFrame: function (frameIndex, time, x, y) {
		frameIndex *= 3;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = x;
		this.frames[frameIndex + 2] = y;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var bone = skeleton.bones[this.boneIndex];

		if (time >= frames[frames.length - 3]) { // Time is after last frame.
			bone.scaleX += (bone.data.scaleX * frames[frames.length - 2] - bone.scaleX) * alpha;
			bone.scaleY += (bone.data.scaleY * frames[frames.length - 1] - bone.scaleY) * alpha;
			return;
		}

		// Interpolate between the previous frame and the current frame.
		var frameIndex = spine.Animation.binarySearch(frames, time, 3);
		var prevFrameX = frames[frameIndex - 2];
		var prevFrameY = frames[frameIndex - 1];
		var frameTime = frames[frameIndex];
		var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*PREV_FRAME_TIME*/] - frameTime);
		percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

		bone.scaleX += (bone.data.scaleX * (prevFrameX + (frames[frameIndex + 1/*FRAME_X*/] - prevFrameX) * percent) - bone.scaleX) * alpha;
		bone.scaleY += (bone.data.scaleY * (prevFrameY + (frames[frameIndex + 2/*FRAME_Y*/] - prevFrameY) * percent) - bone.scaleY) * alpha;
	}
};

spine.ColorTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, r, g, b, a, ...
	this.frames.length = frameCount * 5;
};
spine.ColorTimeline.prototype = {
	slotIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 5;
	},
	setFrame: function (frameIndex, time, r, g, b, a) {
		frameIndex *= 5;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = r;
		this.frames[frameIndex + 2] = g;
		this.frames[frameIndex + 3] = b;
		this.frames[frameIndex + 4] = a;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var r, g, b, a;
		if (time >= frames[frames.length - 5]) {
			// Time is after last frame.
			var i = frames.length - 1;
			r = frames[i - 3];
			g = frames[i - 2];
			b = frames[i - 1];
			a = frames[i];
		} else {
			// Interpolate between the previous frame and the current frame.
			var frameIndex = spine.Animation.binarySearch(frames, time, 5);
			var prevFrameR = frames[frameIndex - 4];
			var prevFrameG = frames[frameIndex - 3];
			var prevFrameB = frames[frameIndex - 2];
			var prevFrameA = frames[frameIndex - 1];
			var frameTime = frames[frameIndex];
			var percent = 1 - (time - frameTime) / (frames[frameIndex - 5/*PREV_FRAME_TIME*/] - frameTime);
			percent = this.curves.getCurvePercent(frameIndex / 5 - 1, percent);

			r = prevFrameR + (frames[frameIndex + 1/*FRAME_R*/] - prevFrameR) * percent;
			g = prevFrameG + (frames[frameIndex + 2/*FRAME_G*/] - prevFrameG) * percent;
			b = prevFrameB + (frames[frameIndex + 3/*FRAME_B*/] - prevFrameB) * percent;
			a = prevFrameA + (frames[frameIndex + 4/*FRAME_A*/] - prevFrameA) * percent;
		}
		var slot = skeleton.slots[this.slotIndex];
		if (alpha < 1) {
			slot.r += (r - slot.r) * alpha;
			slot.g += (g - slot.g) * alpha;
			slot.b += (b - slot.b) * alpha;
			slot.a += (a - slot.a) * alpha;
		} else {
			slot.r = r;
			slot.g = g;
			slot.b = b;
			slot.a = a;
		}
	}
};

spine.AttachmentTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, ...
	this.frames.length = frameCount;
	this.attachmentNames = [];
	this.attachmentNames.length = frameCount;
};
spine.AttachmentTimeline.prototype = {
	slotIndex: 0,
	getFrameCount: function () {
		return this.frames.length;
	},
	setFrame: function (frameIndex, time, attachmentName) {
		this.frames[frameIndex] = time;
		this.attachmentNames[frameIndex] = attachmentName;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) {
			if (lastTime > time) this.apply(skeleton, lastTime, Number.MAX_VALUE, null, 0);
			return;
		} else if (lastTime > time) //
			lastTime = -1;

		var frameIndex = time >= frames[frames.length - 1] ? frames.length - 1 : spine.Animation.binarySearch1(frames, time) - 1;
		if (frames[frameIndex] < lastTime) return;

		var attachmentName = this.attachmentNames[frameIndex];
		skeleton.slots[this.slotIndex].setAttachment(
			!attachmentName ? null : skeleton.getAttachmentBySlotIndex(this.slotIndex, attachmentName));
	}
};

spine.EventTimeline = function (frameCount) {
	this.frames = []; // time, ...
	this.frames.length = frameCount;
	this.events = [];
	this.events.length = frameCount;
};
spine.EventTimeline.prototype = {
	getFrameCount: function () {
		return this.frames.length;
	},
	setFrame: function (frameIndex, time, event) {
		this.frames[frameIndex] = time;
		this.events[frameIndex] = event;
	},
	/** Fires events for frames > lastTime and <= time. */
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		if (!firedEvents) return;

		var frames = this.frames;
		var frameCount = frames.length;

		if (lastTime > time) { // Fire events after last time for looped animations.
			this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha);
			lastTime = -1;
		} else if (lastTime >= frames[frameCount - 1]) // Last time is after last frame.
			return;
		if (time < frames[0]) return; // Time is before first frame.

		var frameIndex;
		if (lastTime < frames[0])
			frameIndex = 0;
		else {
			frameIndex = spine.Animation.binarySearch1(frames, lastTime);
			var frame = frames[frameIndex];
			while (frameIndex > 0) { // Fire multiple events with the same frame.
				if (frames[frameIndex - 1] != frame) break;
				frameIndex--;
			}
		}
		var events = this.events;
		for (; frameIndex < frameCount && time >= frames[frameIndex]; frameIndex++)
			firedEvents.push(events[frameIndex]);
	}
};

spine.DrawOrderTimeline = function (frameCount) {
	this.frames = []; // time, ...
	this.frames.length = frameCount;
	this.drawOrders = [];
	this.drawOrders.length = frameCount;
};
spine.DrawOrderTimeline.prototype = {
	getFrameCount: function () {
		return this.frames.length;
	},
	setFrame: function (frameIndex, time, drawOrder) {
		this.frames[frameIndex] = time;
		this.drawOrders[frameIndex] = drawOrder;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var frameIndex;
		if (time >= frames[frames.length - 1]) // Time is after last frame.
			frameIndex = frames.length - 1;
		else
			frameIndex = spine.Animation.binarySearch1(frames, time) - 1;

		var drawOrder = skeleton.drawOrder;
		var slots = skeleton.slots;
		var drawOrderToSetupIndex = this.drawOrders[frameIndex];
		if (!drawOrderToSetupIndex) {
			for (var i = 0, n = slots.length; i < n; i++)
				drawOrder[i] = slots[i];
		} else {
			for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
				drawOrder[i] = skeleton.slots[drawOrderToSetupIndex[i]];
		}

	}
};

spine.FfdTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = [];
	this.frames.length = frameCount;
	this.frameVertices = [];
	this.frameVertices.length = frameCount;
};
spine.FfdTimeline.prototype = {
	slotIndex: 0,
	attachment: 0,
	getFrameCount: function () {
		return this.frames.length;
	},
	setFrame: function (frameIndex, time, vertices) {
		this.frames[frameIndex] = time;
		this.frameVertices[frameIndex] = vertices;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var slot = skeleton.slots[this.slotIndex];
		if (slot.attachment != this.attachment) return;

		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var frameVertices = this.frameVertices;
		var vertexCount = frameVertices[0].length;

		var vertices = slot.attachmentVertices;
		if (vertices.length != vertexCount) alpha = 1;
		vertices.length = vertexCount;

		if (time >= frames[frames.length - 1]) { // Time is after last frame.
			var lastVertices = frameVertices[frames.length - 1];
			if (alpha < 1) {
				for (var i = 0; i < vertexCount; i++)
					vertices[i] += (lastVertices[i] - vertices[i]) * alpha;
			} else {
				for (var i = 0; i < vertexCount; i++)
					vertices[i] = lastVertices[i];
			}
			return;
		}

		// Interpolate between the previous frame and the current frame.
		var frameIndex = spine.Animation.binarySearch1(frames, time);
		var frameTime = frames[frameIndex];
		var percent = 1 - (time - frameTime) / (frames[frameIndex - 1] - frameTime);
		percent = this.curves.getCurvePercent(frameIndex - 1, percent < 0 ? 0 : (percent > 1 ? 1 : percent));

		var prevVertices = frameVertices[frameIndex - 1];
		var nextVertices = frameVertices[frameIndex];

		if (alpha < 1) {
			for (var i = 0; i < vertexCount; i++) {
				var prev = prevVertices[i];
				vertices[i] += (prev + (nextVertices[i] - prev) * percent - vertices[i]) * alpha;
			}
		} else {
			for (var i = 0; i < vertexCount; i++) {
				var prev = prevVertices[i];
				vertices[i] = prev + (nextVertices[i] - prev) * percent;
			}
		}
	}
};

spine.IkConstraintTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, mix, bendDirection, ...
	this.frames.length = frameCount * 3;
};
spine.IkConstraintTimeline.prototype = {
	ikConstraintIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 3;
	},
	setFrame: function (frameIndex, time, mix, bendDirection) {
		frameIndex *= 3;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = mix;
		this.frames[frameIndex + 2] = bendDirection;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) return; // Time is before first frame.

		var ikConstraint = skeleton.ikConstraints[this.ikConstraintIndex];

		if (time >= frames[frames.length - 3]) { // Time is after last frame.
			ikConstraint.mix += (frames[frames.length - 2] - ikConstraint.mix) * alpha;
			ikConstraint.bendDirection = frames[frames.length - 1];
			return;
		}

		// Interpolate between the previous frame and the current frame.
		var frameIndex = spine.Animation.binarySearch(frames, time, 3);
		var prevFrameMix = frames[frameIndex + -2/*PREV_FRAME_MIX*/];
		var frameTime = frames[frameIndex];
		var percent = 1 - (time - frameTime) / (frames[frameIndex + -3/*PREV_FRAME_TIME*/] - frameTime);
		percent = this.curves.getCurvePercent(frameIndex / 3 - 1, percent);

		var mix = prevFrameMix + (frames[frameIndex + 1/*FRAME_MIX*/] - prevFrameMix) * percent;
		ikConstraint.mix += (mix - ikConstraint.mix) * alpha;
		ikConstraint.bendDirection = frames[frameIndex + -1/*PREV_FRAME_BEND_DIRECTION*/];
	}
};

spine.FlipXTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, flip, ...
	this.frames.length = frameCount * 2;
};
spine.FlipXTimeline.prototype = {
	boneIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 2;
	},
	setFrame: function (frameIndex, time, flip) {
		frameIndex *= 2;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = flip ? 1 : 0;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) {
			if (lastTime > time) this.apply(skeleton, lastTime, Number.MAX_VALUE, null, 0);
			return;
		} else if (lastTime > time) //
			lastTime = -1;
		var frameIndex = (time >= frames[frames.length - 2] ? frames.length : spine.Animation.binarySearch(frames, time, 2)) - 2;
		if (frames[frameIndex] < lastTime) return;
		skeleton.bones[boneIndex].flipX = frames[frameIndex + 1] != 0;
	}
};

spine.FlipYTimeline = function (frameCount) {
	this.curves = new spine.Curves(frameCount);
	this.frames = []; // time, flip, ...
	this.frames.length = frameCount * 2;
};
spine.FlipYTimeline.prototype = {
	boneIndex: 0,
	getFrameCount: function () {
		return this.frames.length / 2;
	},
	setFrame: function (frameIndex, time, flip) {
		frameIndex *= 2;
		this.frames[frameIndex] = time;
		this.frames[frameIndex + 1] = flip ? 1 : 0;
	},
	apply: function (skeleton, lastTime, time, firedEvents, alpha) {
		var frames = this.frames;
		if (time < frames[0]) {
			if (lastTime > time) this.apply(skeleton, lastTime, Number.MAX_VALUE, null, 0);
			return;
		} else if (lastTime > time) //
			lastTime = -1;
		var frameIndex = (time >= frames[frames.length - 2] ? frames.length : spine.Animation.binarySearch(frames, time, 2)) - 2;
		if (frames[frameIndex] < lastTime) return;
		skeleton.bones[boneIndex].flipY = frames[frameIndex + 1] != 0;
	}
};

spine.SkeletonData = function () {
	this.bones = [];
	this.slots = [];
	this.skins = [];
	this.events = [];
	this.animations = [];
	this.ikConstraints = [];
};
spine.SkeletonData.prototype = {
	name: null,
	defaultSkin: null,
	width: 0, height: 0,
	version: null, hash: null,
	/** @return May be null. */
	findBone: function (boneName) {
		var bones = this.bones;
		for (var i = 0, n = bones.length; i < n; i++)
			if (bones[i].name == boneName) return bones[i];
		return null;
	},
	/** @return -1 if the bone was not found. */
	findBoneIndex: function (boneName) {
		var bones = this.bones;
		for (var i = 0, n = bones.length; i < n; i++)
			if (bones[i].name == boneName) return i;
		return -1;
	},
	/** @return May be null. */
	findSlot: function (slotName) {
		var slots = this.slots;
		for (var i = 0, n = slots.length; i < n; i++) {
			if (slots[i].name == slotName) return slot[i];
		}
		return null;
	},
	/** @return -1 if the bone was not found. */
	findSlotIndex: function (slotName) {
		var slots = this.slots;
		for (var i = 0, n = slots.length; i < n; i++)
			if (slots[i].name == slotName) return i;
		return -1;
	},
	/** @return May be null. */
	findSkin: function (skinName) {
		var skins = this.skins;
		for (var i = 0, n = skins.length; i < n; i++)
			if (skins[i].name == skinName) return skins[i];
		return null;
	},
	/** @return May be null. */
	findEvent: function (eventName) {
		var events = this.events;
		for (var i = 0, n = events.length; i < n; i++)
			if (events[i].name == eventName) return events[i];
		return null;
	},
	/** @return May be null. */
	findAnimation: function (animationName) {
		var animations = this.animations;
		for (var i = 0, n = animations.length; i < n; i++)
			if (animations[i].name == animationName) return animations[i];
		return null;
	},
	/** @return May be null. */
	findIkConstraint: function (ikConstraintName) {
		var ikConstraints = this.ikConstraints;
		for (var i = 0, n = ikConstraints.length; i < n; i++)
			if (ikConstraints[i].name == ikConstraintName) return ikConstraints[i];
		return null;
	}
};

spine.Skeleton = function (skeletonData) {
	this.data = skeletonData;

	this.bones = [];
	for (var i = 0, n = skeletonData.bones.length; i < n; i++) {
		var boneData = skeletonData.bones[i];
		var parent = !boneData.parent ? null : this.bones[skeletonData.bones.indexOf(boneData.parent)];
		this.bones.push(new spine.Bone(boneData, this, parent));
	}

	this.slots = [];
	this.drawOrder = [];
	for (var i = 0, n = skeletonData.slots.length; i < n; i++) {
		var slotData = skeletonData.slots[i];
		var bone = this.bones[skeletonData.bones.indexOf(slotData.boneData)];
		var slot = new spine.Slot(slotData, bone);
		this.slots.push(slot);
		this.drawOrder.push(slot);
	}

	this.ikConstraints = [];
	for (var i = 0, n = skeletonData.ikConstraints.length; i < n; i++)
		this.ikConstraints.push(new spine.IkConstraint(skeletonData.ikConstraints[i], this));

	this.boneCache = [];
	this.updateCache();
};
spine.Skeleton.prototype = {
	x: 0, y: 0,
	skin: null,
	r: 1, g: 1, b: 1, a: 1,
	time: 0,
	flipX: false, flipY: false,
	/** Caches information about bones and IK constraints. Must be called if bones or IK constraints are added or removed. */
	updateCache: function () {
		var ikConstraints = this.ikConstraints;
		var ikConstraintsCount = ikConstraints.length;

		var arrayCount = ikConstraintsCount + 1;
		var boneCache = this.boneCache;
		if (boneCache.length > arrayCount) boneCache.length = arrayCount;
		for (var i = 0, n = boneCache.length; i < n; i++)
			boneCache[i].length = 0;
		while (boneCache.length < arrayCount)
			boneCache[boneCache.length] = [];

		var nonIkBones = boneCache[0];
		var bones = this.bones;

		outer:
		for (var i = 0, n = bones.length; i < n; i++) {
			var bone = bones[i];
			var current = bone;
			do {
				for (var ii = 0; ii < ikConstraintsCount; ii++) {
					var ikConstraint = ikConstraints[ii];
					var parent = ikConstraint.bones[0];
					var child= ikConstraint.bones[ikConstraint.bones.length - 1];
					while (true) {
						if (current == child) {
							boneCache[ii].push(bone);
							boneCache[ii + 1].push(bone);
							continue outer;
						}
						if (child == parent) break;
						child = child.parent;
					}
				}
				current = current.parent;
			} while (current);
			nonIkBones[nonIkBones.length] = bone;
		}
	},
	/** Updates the world transform for each bone. */
	updateWorldTransform: function () {
		var bones = this.bones;
		for (var i = 0, n = bones.length; i < n; i++) {
			var bone = bones[i];
			bone.rotationIK = bone.rotation;
		}
		var i = 0, last = this.boneCache.length - 1;
		while (true) {
			var cacheBones = this.boneCache[i];
			for (var ii = 0, nn = cacheBones.length; ii < nn; ii++)
				cacheBones[ii].updateWorldTransform();
			if (i == last) break;
			this.ikConstraints[i].apply();
			i++;
		}
	},
	/** Sets the bones and slots to their setup pose values. */
	setToSetupPose: function () {
		this.setBonesToSetupPose();
		this.setSlotsToSetupPose();
	},
	setBonesToSetupPose: function () {
		var bones = this.bones;
		for (var i = 0, n = bones.length; i < n; i++)
			bones[i].setToSetupPose();

		var ikConstraints = this.ikConstraints;
		for (var i = 0, n = ikConstraints.length; i < n; i++) {
			var ikConstraint = ikConstraints[i];
			ikConstraint.bendDirection = ikConstraint.data.bendDirection;
			ikConstraint.mix = ikConstraint.data.mix;
		}
	},
	setSlotsToSetupPose: function () {
		var slots = this.slots;
		var drawOrder = this.drawOrder;
		for (var i = 0, n = slots.length; i < n; i++) {
			drawOrder[i] = slots[i];
			slots[i].setToSetupPose(i);
		}
	},
	/** @return May return null. */
	getRootBone: function () {
		return this.bones.length ? this.bones[0] : null;
	},
	/** @return May be null. */
	findBone: function (boneName) {
		var bones = this.bones;
		for (var i = 0, n = bones.length; i < n; i++)
			if (bones[i].data.name == boneName) return bones[i];
		return null;
	},
	/** @return -1 if the bone was not found. */
	findBoneIndex: function (boneName) {
		var bones = this.bones;
		for (var i = 0, n = bones.length; i < n; i++)
			if (bones[i].data.name == boneName) return i;
		return -1;
	},
	/** @return May be null. */
	findSlot: function (slotName) {
		var slots = this.slots;
		for (var i = 0, n = slots.length; i < n; i++)
			if (slots[i].data.name == slotName) return slots[i];
		return null;
	},
	/** @return -1 if the bone was not found. */
	findSlotIndex: function (slotName) {
		var slots = this.slots;
		for (var i = 0, n = slots.length; i < n; i++)
			if (slots[i].data.name == slotName) return i;
		return -1;
	},
	setSkinByName: function (skinName) {
		var skin = this.data.findSkin(skinName);
		if (!skin) throw "Skin not found: " + skinName;
		this.setSkin(skin);
	},
	/** Sets the skin used to look up attachments before looking in the {@link SkeletonData#getDefaultSkin() default skin}.
	 * Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was
	 * no old skin, each slot's setup mode attachment is attached from the new skin.
	 * @param newSkin May be null. */
	setSkin: function (newSkin) {
		if (newSkin) {
			if (this.skin)
				newSkin._attachAll(this, this.skin);
			else {
				var slots = this.slots;
				for (var i = 0, n = slots.length; i < n; i++) {
					var slot = slots[i];
					var name = slot.data.attachmentName;
					if (name) {
						var attachment = newSkin.getAttachment(i, name);
						if (attachment) slot.setAttachment(attachment);
					}
				}
			}
		}
		this.skin = newSkin;
	},
	/** @return May be null. */
	getAttachmentBySlotName: function (slotName, attachmentName) {
		return this.getAttachmentBySlotIndex(this.data.findSlotIndex(slotName), attachmentName);
	},
	/** @return May be null. */
	getAttachmentBySlotIndex: function (slotIndex, attachmentName) {
		if (this.skin) {
			var attachment = this.skin.getAttachment(slotIndex, attachmentName);
			if (attachment) return attachment;
		}
		if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
		return null;
	},
	/** @param attachmentName May be null. */
	setAttachment: function (slotName, attachmentName) {
		var slots = this.slots;
		for (var i = 0, n = slots.length; i < n; i++) {
			var slot = slots[i];
			if (slot.data.name == slotName) {
				var attachment = null;
				if (attachmentName) {
					attachment = this.getAttachmentBySlotIndex(i, attachmentName);
					if (!attachment) throw "Attachment not found: " + attachmentName + ", for slot: " + slotName;
				}
				slot.setAttachment(attachment);
				return;
			}
		}
		throw "Slot not found: " + slotName;
	},
	/** @return May be null. */
	findIkConstraint: function (ikConstraintName) {
		var ikConstraints = this.ikConstraints;
		for (var i = 0, n = ikConstraints.length; i < n; i++)
			if (ikConstraints[i].data.name == ikConstraintName) return ikConstraints[i];
		return null;
	},
	update: function (delta) {
		this.time += delta;
	}
};

spine.EventData = function (name) {
	this.name = name;
};
spine.EventData.prototype = {
	intValue: 0,
	floatValue: 0,
	stringValue: null
};

spine.Event = function (data) {
	this.data = data;
};
spine.Event.prototype = {
	intValue: 0,
	floatValue: 0,
	stringValue: null
};

spine.AttachmentType = {
	region: 0,
	boundingbox: 1,
	mesh: 2,
	skinnedmesh: 3
};

spine.RegionAttachment = function (name) {
	this.name = name;
	this.offset = [];
	this.offset.length = 8;
	this.uvs = [];
	this.uvs.length = 8;
};
spine.RegionAttachment.prototype = {
	type: spine.AttachmentType.region,
	x: 0, y: 0,
	rotation: 0,
	scaleX: 1, scaleY: 1,
	width: 0, height: 0,
	r: 1, g: 1, b: 1, a: 1,
	path: null,
	rendererObject: null,
	regionOffsetX: 0, regionOffsetY: 0,
	regionWidth: 0, regionHeight: 0,
	regionOriginalWidth: 0, regionOriginalHeight: 0,
	setUVs: function (u, v, u2, v2, rotate) {
		var uvs = this.uvs;
		if (rotate) {
			uvs[2/*X2*/] = u;
			uvs[3/*Y2*/] = v2;
			uvs[4/*X3*/] = u;
			uvs[5/*Y3*/] = v;
			uvs[6/*X4*/] = u2;
			uvs[7/*Y4*/] = v;
			uvs[0/*X1*/] = u2;
			uvs[1/*Y1*/] = v2;
		} else {
			uvs[0/*X1*/] = u;
			uvs[1/*Y1*/] = v2;
			uvs[2/*X2*/] = u;
			uvs[3/*Y2*/] = v;
			uvs[4/*X3*/] = u2;
			uvs[5/*Y3*/] = v;
			uvs[6/*X4*/] = u2;
			uvs[7/*Y4*/] = v2;
		}
	},
	updateOffset: function () {
		var regionScaleX = this.width / this.regionOriginalWidth * this.scaleX;
		var regionScaleY = this.height / this.regionOriginalHeight * this.scaleY;
		var localX = -this.width / 2 * this.scaleX + this.regionOffsetX * regionScaleX;
		var localY = -this.height / 2 * this.scaleY + this.regionOffsetY * regionScaleY;
		var localX2 = localX + this.regionWidth * regionScaleX;
		var localY2 = localY + this.regionHeight * regionScaleY;
		var radians = this.rotation * spine.degRad;
		var cos = Math.cos(radians);
		var sin = Math.sin(radians);
		var localXCos = localX * cos + this.x;
		var localXSin = localX * sin;
		var localYCos = localY * cos + this.y;
		var localYSin = localY * sin;
		var localX2Cos = localX2 * cos + this.x;
		var localX2Sin = localX2 * sin;
		var localY2Cos = localY2 * cos + this.y;
		var localY2Sin = localY2 * sin;
		var offset = this.offset;
		offset[0/*X1*/] = localXCos - localYSin;
		offset[1/*Y1*/] = localYCos + localXSin;
		offset[2/*X2*/] = localXCos - localY2Sin;
		offset[3/*Y2*/] = localY2Cos + localXSin;
		offset[4/*X3*/] = localX2Cos - localY2Sin;
		offset[5/*Y3*/] = localY2Cos + localX2Sin;
		offset[6/*X4*/] = localX2Cos - localYSin;
		offset[7/*Y4*/] = localYCos + localX2Sin;
	},
	computeVertices: function (x, y, bone, vertices) {
		x += bone.worldX;
		y += bone.worldY;
		var m00 = bone.m00, m01 = bone.m01, m10 = bone.m10, m11 = bone.m11;
		var offset = this.offset;
		vertices[0/*X1*/] = offset[0/*X1*/] * m00 + offset[1/*Y1*/] * m01 + x;
		vertices[1/*Y1*/] = offset[0/*X1*/] * m10 + offset[1/*Y1*/] * m11 + y;
		vertices[2/*X2*/] = offset[2/*X2*/] * m00 + offset[3/*Y2*/] * m01 + x;
		vertices[3/*Y2*/] = offset[2/*X2*/] * m10 + offset[3/*Y2*/] * m11 + y;
		vertices[4/*X3*/] = offset[4/*X3*/] * m00 + offset[5/*X3*/] * m01 + x;
		vertices[5/*X3*/] = offset[4/*X3*/] * m10 + offset[5/*X3*/] * m11 + y;
		vertices[6/*X4*/] = offset[6/*X4*/] * m00 + offset[7/*Y4*/] * m01 + x;
		vertices[7/*Y4*/] = offset[6/*X4*/] * m10 + offset[7/*Y4*/] * m11 + y;
	}
};

spine.MeshAttachment = function (name) {
	this.name = name;
};
spine.MeshAttachment.prototype = {
	type: spine.AttachmentType.mesh,
	vertices: null,
	uvs: null,
	regionUVs: null,
	triangles: null,
	hullLength: 0,
	r: 1, g: 1, b: 1, a: 1,
	path: null,
	rendererObject: null,
	regionU: 0, regionV: 0, regionU2: 0, regionV2: 0, regionRotate: false,
	regionOffsetX: 0, regionOffsetY: 0,
	regionWidth: 0, regionHeight: 0,
	regionOriginalWidth: 0, regionOriginalHeight: 0,
	edges: null,
	width: 0, height: 0,
	updateUVs: function () {
		var width = this.regionU2 - this.regionU, height = this.regionV2 - this.regionV;
		var n = this.regionUVs.length;
		if (!this.uvs || this.uvs.length != n) {
            this.uvs = new spine.Float32Array(n);
		}
		if (this.regionRotate) {
			for (var i = 0; i < n; i += 2) {
                this.uvs[i] = this.regionU + this.regionUVs[i + 1] * width;
                this.uvs[i + 1] = this.regionV + height - this.regionUVs[i] * height;
			}
		} else {
			for (var i = 0; i < n; i += 2) {
                this.uvs[i] = this.regionU + this.regionUVs[i] * width;
                this.uvs[i + 1] = this.regionV + this.regionUVs[i + 1] * height;
			}
		}
	},
	computeWorldVertices: function (x, y, slot, worldVertices) {
		var bone = slot.bone;
		x += bone.worldX;
		y += bone.worldY;
		var m00 = bone.m00, m01 = bone.m01, m10 = bone.m10, m11 = bone.m11;
		var vertices = this.vertices;
		var verticesCount = vertices.length;
		if (slot.attachmentVertices.length == verticesCount) vertices = slot.attachmentVertices;
		for (var i = 0; i < verticesCount; i += 2) {
			var vx = vertices[i];
			var vy = vertices[i + 1];
			worldVertices[i] = vx * m00 + vy * m01 + x;
			worldVertices[i + 1] = vx * m10 + vy * m11 + y;
		}
	}
};

spine.SkinnedMeshAttachment = function (name) {
	this.name = name;
};
spine.SkinnedMeshAttachment.prototype = {
	type: spine.AttachmentType.skinnedmesh,
	bones: null,
	weights: null,
	uvs: null,
	regionUVs: null,
	triangles: null,
	hullLength: 0,
	r: 1, g: 1, b: 1, a: 1,
	path: null,
	rendererObject: null,
	regionU: 0, regionV: 0, regionU2: 0, regionV2: 0, regionRotate: false,
	regionOffsetX: 0, regionOffsetY: 0,
	regionWidth: 0, regionHeight: 0,
	regionOriginalWidth: 0, regionOriginalHeight: 0,
	edges: null,
	width: 0, height: 0,
	updateUVs: function (u, v, u2, v2, rotate) {
		var width = this.regionU2 - this.regionU, height = this.regionV2 - this.regionV;
		var n = this.regionUVs.length;
		if (!this.uvs || this.uvs.length != n) {
            this.uvs = new spine.Float32Array(n);
		}
		if (this.regionRotate) {
			for (var i = 0; i < n; i += 2) {
                this.uvs[i] = this.regionU + this.regionUVs[i + 1] * width;
                this.uvs[i + 1] = this.regionV + height - this.regionUVs[i] * height;
			}
		} else {
			for (var i = 0; i < n; i += 2) {
                this.uvs[i] = this.regionU + this.regionUVs[i] * width;
                this.uvs[i + 1] = this.regionV + this.regionUVs[i + 1] * height;
			}
		}
	},
	computeWorldVertices: function (x, y, slot, worldVertices) {
		var skeletonBones = slot.bone.skeleton.bones;
		var weights = this.weights;
		var bones = this.bones;

		var w = 0, v = 0, b = 0, f = 0, n = bones.length, nn;
		var wx, wy, bone, vx, vy, weight;
		if (!slot.attachmentVertices.length) {
			for (; v < n; w += 2) {
				wx = 0;
				wy = 0;
				nn = bones[v++] + v;
				for (; v < nn; v++, b += 3) {
					bone = skeletonBones[bones[v]];
					vx = weights[b];
					vy = weights[b + 1];
					weight = weights[b + 2];
					wx += (vx * bone.m00 + vy * bone.m01 + bone.worldX) * weight;
					wy += (vx * bone.m10 + vy * bone.m11 + bone.worldY) * weight;
				}
				worldVertices[w] = wx + x;
				worldVertices[w + 1] = wy + y;
			}
		} else {
			var ffd = slot.attachmentVertices;
			for (; v < n; w += 2) {
				wx = 0;
				wy = 0;
				nn = bones[v++] + v;
				for (; v < nn; v++, b += 3, f += 2) {
					bone = skeletonBones[bones[v]];
					vx = weights[b] + ffd[f];
					vy = weights[b + 1] + ffd[f + 1];
					weight = weights[b + 2];
					wx += (vx * bone.m00 + vy * bone.m01 + bone.worldX) * weight;
					wy += (vx * bone.m10 + vy * bone.m11 + bone.worldY) * weight;
				}
				worldVertices[w] = wx + x;
				worldVertices[w + 1] = wy + y;
			}
		}
	}
};

spine.BoundingBoxAttachment = function (name) {
	this.name = name;
	this.vertices = [];
};
spine.BoundingBoxAttachment.prototype = {
	type: spine.AttachmentType.boundingbox,
	computeWorldVertices: function (x, y, bone, worldVertices) {
		x += bone.worldX;
		y += bone.worldY;
		var m00 = bone.m00, m01 = bone.m01, m10 = bone.m10, m11 = bone.m11;
		var vertices = this.vertices;
		for (var i = 0, n = vertices.length; i < n; i += 2) {
			var px = vertices[i];
			var py = vertices[i + 1];
			worldVertices[i] = px * m00 + py * m01 + x;
			worldVertices[i + 1] = px * m10 + py * m11 + y;
		}
	}
};

spine.AnimationStateData = function (skeletonData) {
	this.skeletonData = skeletonData;
	this.animationToMixTime = {};
};
spine.AnimationStateData.prototype = {
	defaultMix: 0,
	setMixByName: function (fromName, toName, duration) {
		var from = this.skeletonData.findAnimation(fromName);
		if (!from) throw "Animation not found: " + fromName;
		var to = this.skeletonData.findAnimation(toName);
		if (!to) throw "Animation not found: " + toName;
		this.setMix(from, to, duration);
	},
	setMix: function (from, to, duration) {
		this.animationToMixTime[from.name + ":" + to.name] = duration;
	},
	getMix: function (from, to) {
		var key = from.name + ":" + to.name;
		return this.animationToMixTime.hasOwnProperty(key) ? this.animationToMixTime[key] : this.defaultMix;
	}
};

spine.TrackEntry = function () {};
spine.TrackEntry.prototype = {
	next: null, previous: null,
	animation: null,
	loop: false,
	delay: 0, time: 0, lastTime: -1, endTime: 0,
	timeScale: 1,
	mixTime: 0, mixDuration: 0, mix: 1,
	onStart: null, onEnd: null, onComplete: null, onEvent: null
};

spine.AnimationState = function (stateData) {
	this.data = stateData;
	this.tracks = [];
	this.events = [];
};
spine.AnimationState.prototype = {
	onStart: null,
	onEnd: null,
	onComplete: null,
	onEvent: null,
	timeScale: 1,
	update: function (delta) {
		delta *= this.timeScale;
		for (var i = 0; i < this.tracks.length; i++) {
			var current = this.tracks[i];
			if (!current) continue;

			current.time += delta * current.timeScale;
			if (current.previous) {
				var previousDelta = delta * current.previous.timeScale;
				current.previous.time += previousDelta;
				current.mixTime += previousDelta;
			}

			var next = current.next;
			if (next) {
				next.time = current.lastTime - next.delay;
				if (next.time >= 0) this.setCurrent(i, next);
			} else {
				// End non-looping animation when it reaches its end time and there is no next entry.
				if (!current.loop && current.lastTime >= current.endTime) this.clearTrack(i);
			}
		}
	},
	apply: function (skeleton) {
		for (var i = 0; i < this.tracks.length; i++) {
			var current = this.tracks[i];
			if (!current) continue;

			this.events.length = 0;

			var time = current.time;
			var lastTime = current.lastTime;
			var endTime = current.endTime;
			var loop = current.loop;
			if (!loop && time > endTime) time = endTime;

			var previous = current.previous;
			if (!previous) {
				if (current.mix == 1)
					current.animation.apply(skeleton, current.lastTime, time, loop, this.events);
				else
					current.animation.mix(skeleton, current.lastTime, time, loop, this.events, current.mix);
			} else {
				var previousTime = previous.time;
				if (!previous.loop && previousTime > previous.endTime) previousTime = previous.endTime;
				previous.animation.apply(skeleton, previousTime, previousTime, previous.loop, null);

				var alpha = current.mixTime / current.mixDuration * current.mix;
				if (alpha >= 1) {
					alpha = 1;
					current.previous = null;
				}
				current.animation.mix(skeleton, current.lastTime, time, loop, this.events, alpha);
			}

			for (var ii = 0, nn = this.events.length; ii < nn; ii++) {
				var event = this.events[ii];
				if (current.onEvent) current.onEvent(i, event);
				if (this.onEvent) this.onEvent(i, event);
			}

			// Check if completed the animation or a loop iteration.
			if (loop ? (lastTime % endTime > time % endTime) : (lastTime < endTime && time >= endTime)) {
				var count = Math.floor(time / endTime);
				if (current.onComplete) current.onComplete(i, count);
				if (this.onComplete) this.onComplete(i, count);
			}

			current.lastTime = current.time;
		}
	},
	clearTracks: function () {
		for (var i = 0, n = this.tracks.length; i < n; i++)
			this.clearTrack(i);
		this.tracks.length = 0;
	},
	clearTrack: function (trackIndex) {
		if (trackIndex >= this.tracks.length) return;
		var current = this.tracks[trackIndex];
		if (!current) return;

		if (current.onEnd) current.onEnd(trackIndex);
		if (this.onEnd) this.onEnd(trackIndex);

		this.tracks[trackIndex] = null;
	},
	_expandToIndex: function (index) {
		if (index < this.tracks.length) return this.tracks[index];
		while (index >= this.tracks.length)
			this.tracks.push(null);
		return null;
	},
	setCurrent: function (index, entry) {
		var current = this._expandToIndex(index);
		if (current) {
			var previous = current.previous;
			current.previous = null;

			if (current.onEnd) current.onEnd(index);
			if (this.onEnd) this.onEnd(index);

			entry.mixDuration = this.data.getMix(current.animation, entry.animation);
			if (entry.mixDuration > 0) {
				entry.mixTime = 0;
				// If a mix is in progress, mix from the closest animation.
				if (previous && current.mixTime / current.mixDuration < 0.5)
					entry.previous = previous;
				else
					entry.previous = current;
			}
		}

		this.tracks[index] = entry;

		if (entry.onStart) entry.onStart(index);
		if (this.onStart) this.onStart(index);
	},
	setAnimationByName: function (trackIndex, animationName, loop) {
		var animation = this.data.skeletonData.findAnimation(animationName);
		if (!animation) throw "Animation not found: " + animationName;
		return this.setAnimation(trackIndex, animation, loop);
	},
	/** Set the current animation. Any queued animations are cleared. */
	setAnimation: function (trackIndex, animation, loop) {
		var entry = new spine.TrackEntry();
		entry.animation = animation;
		entry.loop = loop;
		entry.endTime = animation.duration;
		this.setCurrent(trackIndex, entry);
		return entry;
	},
	addAnimationByName: function (trackIndex, animationName, loop, delay) {
		var animation = this.data.skeletonData.findAnimation(animationName);
		if (!animation) throw "Animation not found: " + animationName;
		return this.addAnimation(trackIndex, animation, loop, delay);
	},
	/** Adds an animation to be played delay seconds after the current or last queued animation.
	 * @param delay May be <= 0 to use duration of previous animation minus any mix duration plus the negative delay. */
	addAnimation: function (trackIndex, animation, loop, delay) {
		var entry = new spine.TrackEntry();
		entry.animation = animation;
		entry.loop = loop;
		entry.endTime = animation.duration;

		var last = this._expandToIndex(trackIndex);
		if (last) {
			while (last.next)
				last = last.next;
			last.next = entry;
		} else
			this.tracks[trackIndex] = entry;

		if (delay <= 0) {
			if (last)
				delay += last.endTime - this.data.getMix(last.animation, animation);
			else
				delay = 0;
		}
		entry.delay = delay;

		return entry;
	},
	/** May be null. */
	getCurrent: function (trackIndex) {
		if (trackIndex >= this.tracks.length) return null;
		return this.tracks[trackIndex];
	}
};

spine.SkeletonJson = function (attachmentLoader) {
	this.attachmentLoader = attachmentLoader;
};
spine.SkeletonJson.prototype = {
	scale: 1,
	readSkeletonData: function (root, name) {
		var skeletonData = new spine.SkeletonData();
		skeletonData.name = name;

		// Skeleton.
		var skeletonMap = root["skeleton"];
		if (skeletonMap) {
			skeletonData.hash = skeletonMap["hash"];
			skeletonData.version = skeletonMap["spine"];
			skeletonData.width = skeletonMap["width"] || 0;
			skeletonData.height = skeletonMap["height"] || 0;
		}

		// Bones.
		var bones = root["bones"];
		for (var i = 0, n = bones.length; i < n; i++) {
			var boneMap = bones[i];
			var parent = null;
			if (boneMap["parent"]) {
				parent = skeletonData.findBone(boneMap["parent"]);
				if (!parent) throw "Parent bone not found: " + boneMap["parent"];
			}
			var boneData = new spine.BoneData(boneMap["name"], parent);
			boneData.length = (boneMap["length"] || 0) * this.scale;
			boneData.x = (boneMap["x"] || 0) * this.scale;
			boneData.y = (boneMap["y"] || 0) * this.scale;
			boneData.rotation = (boneMap["rotation"] || 0);
			boneData.scaleX = boneMap.hasOwnProperty("scaleX") ? boneMap["scaleX"] : 1;
			boneData.scaleY = boneMap.hasOwnProperty("scaleY") ? boneMap["scaleY"] : 1;
			boneData.inheritScale = boneMap.hasOwnProperty("inheritScale") ? boneMap["inheritScale"] : true;
			boneData.inheritRotation = boneMap.hasOwnProperty("inheritRotation") ? boneMap["inheritRotation"] : true;
			skeletonData.bones.push(boneData);
		}

		// IK constraints.
		var ik = root["ik"];
		if (ik) {
			for (var i = 0, n = ik.length; i < n; i++) {
				var ikMap = ik[i];
				var ikConstraintData = new spine.IkConstraintData(ikMap["name"]);

				var bones = ikMap["bones"];
				for (var ii = 0, nn = bones.length; ii < nn; ii++) {
					var bone = skeletonData.findBone(bones[ii]);
					if (!bone) throw "IK bone not found: " + bones[ii];
					ikConstraintData.bones.push(bone);
				}

				ikConstraintData.target = skeletonData.findBone(ikMap["target"]);
				if (!ikConstraintData.target) throw "Target bone not found: " + ikMap["target"];

				ikConstraintData.bendDirection = (!ikMap.hasOwnProperty("bendPositive") || ikMap["bendPositive"]) ? 1 : -1;
				ikConstraintData.mix = ikMap.hasOwnProperty("mix") ? ikMap["mix"] : 1;

				skeletonData.ikConstraints.push(ikConstraintData);
			}
		}

		// Slots.
		var slots = root["slots"];
		for (var i = 0, n = slots.length; i < n; i++) {
			var slotMap = slots[i];
			var boneData = skeletonData.findBone(slotMap["bone"]);
			if (!boneData) throw "Slot bone not found: " + slotMap["bone"];
			var slotData = new spine.SlotData(slotMap["name"], boneData);

			var color = slotMap["color"];
			if (color) {
				slotData.r = this.toColor(color, 0);
				slotData.g = this.toColor(color, 1);
				slotData.b = this.toColor(color, 2);
				slotData.a = this.toColor(color, 3);
			}

			slotData.attachmentName = slotMap["attachment"];
			slotData.additiveBlending = slotMap["additive"] && slotMap["additive"] == "true";

			skeletonData.slots.push(slotData);
		}

		// Skins.
		var skins = root["skins"];
		for (var skinName in skins) {
			if (!skins.hasOwnProperty(skinName)) continue;
			var skinMap = skins[skinName];
			var skin = new spine.Skin(skinName);
			for (var slotName in skinMap) {
				if (!skinMap.hasOwnProperty(slotName)) continue;
				var slotIndex = skeletonData.findSlotIndex(slotName);
				var slotEntry = skinMap[slotName];
				for (var attachmentName in slotEntry) {
					if (!slotEntry.hasOwnProperty(attachmentName)) continue;
					var attachment = this.readAttachment(skin, attachmentName, slotEntry[attachmentName]);
					if (attachment) skin.addAttachment(slotIndex, attachmentName, attachment);
				}
			}
			skeletonData.skins.push(skin);
			if (skin.name == "default") skeletonData.defaultSkin = skin;
		}

		// Events.
		var events = root["events"];
		for (var eventName in events) {
			if (!events.hasOwnProperty(eventName)) continue;
			var eventMap = events[eventName];
			var eventData = new spine.EventData(eventName);
			eventData.intValue = eventMap["int"] || 0;
			eventData.floatValue = eventMap["float"] || 0;
			eventData.stringValue = eventMap["string"] || null;
			skeletonData.events.push(eventData);
		}

		// Animations.
		var animations = root["animations"];
		for (var animationName in animations) {
			if (!animations.hasOwnProperty(animationName)) continue;
			this.readAnimation(animationName, animations[animationName], skeletonData);
		}

		return skeletonData;
	},
	readAttachment: function (skin, name, map) {
		name = map["name"] || name;

		var type = spine.AttachmentType[map["type"] || "region"];
		var path = map["path"] || name;

		var scale = this.scale;
		if (type == spine.AttachmentType.region) {
			var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
			if (!region) return null;
			region.path = path;
			region.x = (map["x"] || 0) * scale;
			region.y = (map["y"] || 0) * scale;
			region.scaleX = map.hasOwnProperty("scaleX") ? map["scaleX"] : 1;
			region.scaleY = map.hasOwnProperty("scaleY") ? map["scaleY"] : 1;
			region.rotation = map["rotation"] || 0;
			region.width = (map["width"] || 0) * scale;
			region.height = (map["height"] || 0) * scale;

			var color = map["color"];
			if (color) {
				region.r = this.toColor(color, 0);
				region.g = this.toColor(color, 1);
				region.b = this.toColor(color, 2);
				region.a = this.toColor(color, 3);
			}

			region.updateOffset();
			return region;
		} else if (type == spine.AttachmentType.mesh) {
			var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
			if (!mesh) return null;
			mesh.path = path;
			mesh.vertices = this.getFloatArray(map, "vertices", scale);
			mesh.triangles = this.getIntArray(map, "triangles");
			mesh.regionUVs = this.getFloatArray(map, "uvs", 1);
			mesh.updateUVs();

			color = map["color"];
			if (color) {
				mesh.r = this.toColor(color, 0);
				mesh.g = this.toColor(color, 1);
				mesh.b = this.toColor(color, 2);
				mesh.a = this.toColor(color, 3);
			}

			mesh.hullLength = (map["hull"] || 0) * 2;
			if (map["edges"]) mesh.edges = this.getIntArray(map, "edges");
			mesh.width = (map["width"] || 0) * scale;
			mesh.height = (map["height"] || 0) * scale;
			return mesh;
		} else if (type == spine.AttachmentType.skinnedmesh) {
			var mesh = this.attachmentLoader.newSkinnedMeshAttachment(skin, name, path);
			if (!mesh) return null;
			mesh.path = path;

			var uvs = this.getFloatArray(map, "uvs", 1);
			var vertices = this.getFloatArray(map, "vertices", 1);
			var weights = [];
			var bones = [];
			for (var i = 0, n = vertices.length; i < n; ) {
				var boneCount = vertices[i++] | 0;
				bones[bones.length] = boneCount;
				for (var nn = i + boneCount * 4; i < nn; ) {
					bones[bones.length] = vertices[i];
					weights[weights.length] = vertices[i + 1] * scale;
					weights[weights.length] = vertices[i + 2] * scale;
					weights[weights.length] = vertices[i + 3];
					i += 4;
				}
			}
			mesh.bones = bones;
			mesh.weights = weights;
			mesh.triangles = this.getIntArray(map, "triangles");
			mesh.regionUVs = uvs;
			mesh.updateUVs();

			color = map["color"];
			if (color) {
				mesh.r = this.toColor(color, 0);
				mesh.g = this.toColor(color, 1);
				mesh.b = this.toColor(color, 2);
				mesh.a = this.toColor(color, 3);
			}

			mesh.hullLength = (map["hull"] || 0) * 2;
			if (map["edges"]) mesh.edges = this.getIntArray(map, "edges");
			mesh.width = (map["width"] || 0) * scale;
			mesh.height = (map["height"] || 0) * scale;
			return mesh;
		} else if (type == spine.AttachmentType.boundingbox) {
			var attachment = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
			var vertices = map["vertices"];
			for (var i = 0, n = vertices.length; i < n; i++)
				attachment.vertices.push(vertices[i] * scale);
			return attachment;
		}
		throw "Unknown attachment type: " + type;
	},
	readAnimation: function (name, map, skeletonData) {
		var timelines = [];
		var duration = 0;

		var slots = map["slots"];
		for (var slotName in slots) {
			if (!slots.hasOwnProperty(slotName)) continue;
			var slotMap = slots[slotName];
			var slotIndex = skeletonData.findSlotIndex(slotName);

			for (var timelineName in slotMap) {
				if (!slotMap.hasOwnProperty(timelineName)) continue;
				var values = slotMap[timelineName];
				if (timelineName == "color") {
					var timeline = new spine.ColorTimeline(values.length);
					timeline.slotIndex = slotIndex;

					var frameIndex = 0;
					for (var i = 0, n = values.length; i < n; i++) {
						var valueMap = values[i];
						var color = valueMap["color"];
						var r = this.toColor(color, 0);
						var g = this.toColor(color, 1);
						var b = this.toColor(color, 2);
						var a = this.toColor(color, 3);
						timeline.setFrame(frameIndex, valueMap["time"], r, g, b, a);
						this.readCurve(timeline, frameIndex, valueMap);
						frameIndex++;
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 5 - 5]);

				} else if (timelineName == "attachment") {
					var timeline = new spine.AttachmentTimeline(values.length);
					timeline.slotIndex = slotIndex;

					var frameIndex = 0;
					for (var i = 0, n = values.length; i < n; i++) {
						var valueMap = values[i];
						timeline.setFrame(frameIndex++, valueMap["time"], valueMap["name"]);
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);

				} else
					throw "Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")";
			}
		}

		var bones = map["bones"];
		for (var boneName in bones) {
			if (!bones.hasOwnProperty(boneName)) continue;
			var boneIndex = skeletonData.findBoneIndex(boneName);
			if (boneIndex == -1) throw "Bone not found: " + boneName;
			var boneMap = bones[boneName];

			for (var timelineName in boneMap) {
				if (!boneMap.hasOwnProperty(timelineName)) continue;
				var values = boneMap[timelineName];
				if (timelineName == "rotate") {
					var timeline = new spine.RotateTimeline(values.length);
					timeline.boneIndex = boneIndex;

					var frameIndex = 0;
					for (var i = 0, n = values.length; i < n; i++) {
						var valueMap = values[i];
						timeline.setFrame(frameIndex, valueMap["time"], valueMap["angle"]);
						this.readCurve(timeline, frameIndex, valueMap);
						frameIndex++;
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 2 - 2]);

				} else if (timelineName == "translate" || timelineName == "scale") {
					var timeline;
					var timelineScale = 1;
					if (timelineName == "scale")
						timeline = new spine.ScaleTimeline(values.length);
					else {
						timeline = new spine.TranslateTimeline(values.length);
						timelineScale = this.scale;
					}
					timeline.boneIndex = boneIndex;

					var frameIndex = 0;
					for (var i = 0, n = values.length; i < n; i++) {
						var valueMap = values[i];
						var x = (valueMap["x"] || 0) * timelineScale;
						var y = (valueMap["y"] || 0) * timelineScale;
						timeline.setFrame(frameIndex, valueMap["time"], x, y);
						this.readCurve(timeline, frameIndex, valueMap);
						frameIndex++;
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 3 - 3]);

				} else if (timelineName == "flipX" || timelineName == "flipY") {
					var x = timelineName == "flipX";
					var timeline = x ? new spine.FlipXTimeline(values.length) : new spine.FlipYTimeline(values.length);
					timeline.boneIndex = boneIndex;

					var field = x ? "x" : "y";
					var frameIndex = 0;
					for (var i = 0, n = values.length; i < n; i++) {
						var valueMap = values[i];
						timeline.setFrame(frameIndex, valueMap["time"], valueMap[field] || false);
						frameIndex++;
					}
					timelines.push(timeline);
					duration = Math.max(duration, timeline.frames[timeline.getFrameCount() * 2 - 2]);
				} else
					throw "Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")";
			}
		}

		var ikMap = map["ik"];
		for (var ikConstraintName in ikMap) {
			if (!ikMap.hasOwnProperty(ikConstraintName)) continue;
			var ikConstraint = skeletonData.findIkConstraint(ikConstraintName);
			var values = ikMap[ikConstraintName];
			var timeline = new spine.IkConstraintTimeline(values.length);
			timeline.ikConstraintIndex = skeletonData.ikConstraints.indexOf(ikConstraint);
			var frameIndex = 0;
			for (var i = 0, n = values.length; i < n; i++) {
				var valueMap = values[i];
				var mix = valueMap.hasOwnProperty("mix") ? valueMap["mix"] : 1;
				var bendDirection = (!valueMap.hasOwnProperty("bendPositive") || valueMap["bendPositive"]) ? 1 : -1;
				timeline.setFrame(frameIndex, valueMap["time"], mix, bendDirection);
				this.readCurve(timeline, frameIndex, valueMap);
				frameIndex++;
			}
			timelines.push(timeline);
			duration = Math.max(duration, timeline.frames[timeline.frameCount * 3 - 3]);
		}

		var ffd = map["ffd"];
		for (var skinName in ffd) {
			var skin = skeletonData.findSkin(skinName);
			var slotMap = ffd[skinName];
			for (slotName in slotMap) {
				var slotIndex = skeletonData.findSlotIndex(slotName);
				var meshMap = slotMap[slotName];
				for (var meshName in meshMap) {
					var values = meshMap[meshName];
					var timeline = new spine.FfdTimeline(values.length);
					var attachment = skin.getAttachment(slotIndex, meshName);
					if (!attachment) throw "FFD attachment not found: " + meshName;
					timeline.slotIndex = slotIndex;
					timeline.attachment = attachment;

					var isMesh = attachment.type == spine.AttachmentType.mesh;
					var vertexCount;
					if (isMesh)
						vertexCount = attachment.vertices.length;
					else
						vertexCount = attachment.weights.length / 3 * 2;

					var frameIndex = 0;
					for (var i = 0, n = values.length; i < n; i++) {
						var valueMap = values[i];
						var vertices;
						if (!valueMap["vertices"]) {
							if (isMesh)
								vertices = attachment.vertices;
							else {
								vertices = [];
								vertices.length = vertexCount;
							}
						} else {
							var verticesValue = valueMap["vertices"];
							var vertices = [];
							vertices.length = vertexCount;
							var start = valueMap["offset"] || 0;
							var nn = verticesValue.length;
							if (this.scale == 1) {
								for (var ii = 0; ii < nn; ii++)
									vertices[ii + start] = verticesValue[ii];
							} else {
								for (var ii = 0; ii < nn; ii++)
									vertices[ii + start] = verticesValue[ii] * this.scale;
							}
							if (isMesh) {
								var meshVertices = attachment.vertices;
								for (var ii = 0, nn = vertices.length; ii < nn; ii++)
									vertices[ii] += meshVertices[ii];
							}
						}

						timeline.setFrame(frameIndex, valueMap["time"], vertices);
						this.readCurve(timeline, frameIndex, valueMap);
						frameIndex++;
					}
					timelines[timelines.length] = timeline;
					duration = Math.max(duration, timeline.frames[timeline.frameCount - 1]);
				}
			}
		}

		var drawOrderValues = map["drawOrder"];
		if (!drawOrderValues) drawOrderValues = map["draworder"];
		if (drawOrderValues) {
			var timeline = new spine.DrawOrderTimeline(drawOrderValues.length);
			var slotCount = skeletonData.slots.length;
			var frameIndex = 0;
			for (var i = 0, n = drawOrderValues.length; i < n; i++) {
				var drawOrderMap = drawOrderValues[i];
				var drawOrder = null;
				if (drawOrderMap["offsets"]) {
					drawOrder = [];
					drawOrder.length = slotCount;
					for (var ii = slotCount - 1; ii >= 0; ii--)
						drawOrder[ii] = -1;
					var offsets = drawOrderMap["offsets"];
					var unchanged = [];
					unchanged.length = slotCount - offsets.length;
					var originalIndex = 0, unchangedIndex = 0;
					for (var ii = 0, nn = offsets.length; ii < nn; ii++) {
						var offsetMap = offsets[ii];
						var slotIndex = skeletonData.findSlotIndex(offsetMap["slot"]);
						if (slotIndex == -1) throw "Slot not found: " + offsetMap["slot"];
						// Collect unchanged items.
						while (originalIndex != slotIndex)
							unchanged[unchangedIndex++] = originalIndex++;
						// Set changed items.
						drawOrder[originalIndex + offsetMap["offset"]] = originalIndex++;
					}
					// Collect remaining unchanged items.
					while (originalIndex < slotCount)
						unchanged[unchangedIndex++] = originalIndex++;
					// Fill in unchanged items.
					for (var ii = slotCount - 1; ii >= 0; ii--)
						if (drawOrder[ii] == -1) drawOrder[ii] = unchanged[--unchangedIndex];
				}
				timeline.setFrame(frameIndex++, drawOrderMap["time"], drawOrder);
			}
			timelines.push(timeline);
			duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
		}

		var events = map["events"];
		if (events) {
			var timeline = new spine.EventTimeline(events.length);
			var frameIndex = 0;
			for (var i = 0, n = events.length; i < n; i++) {
				var eventMap = events[i];
				var eventData = skeletonData.findEvent(eventMap["name"]);
				if (!eventData) throw "Event not found: " + eventMap["name"];
				var event = new spine.Event(eventData);
				event.intValue = eventMap.hasOwnProperty("int") ? eventMap["int"] : eventData.intValue;
				event.floatValue = eventMap.hasOwnProperty("float") ? eventMap["float"] : eventData.floatValue;
				event.stringValue = eventMap.hasOwnProperty("string") ? eventMap["string"] : eventData.stringValue;
				timeline.setFrame(frameIndex++, eventMap["time"], event);
			}
			timelines.push(timeline);
			duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
		}

		skeletonData.animations.push(new spine.Animation(name, timelines, duration));
	},
	readCurve: function (timeline, frameIndex, valueMap) {
		var curve = valueMap["curve"];
		if (!curve)
			timeline.curves.setLinear(frameIndex);
		else if (curve == "stepped")
			timeline.curves.setStepped(frameIndex);
		else if (curve instanceof Array)
			timeline.curves.setCurve(frameIndex, curve[0], curve[1], curve[2], curve[3]);
	},
	toColor: function (hexString, colorIndex) {
		if (hexString.length != 8) throw "Color hexidecimal length must be 8, recieved: " + hexString;
		return parseInt(hexString.substring(colorIndex * 2, (colorIndex * 2) + 2), 16) / 255;
	},
	getFloatArray: function (map, name, scale) {
		var list = map[name];
		var values = new spine.Float32Array(list.length);
		var i = 0, n = list.length;
		if (scale == 1) {
			for (; i < n; i++)
				values[i] = list[i];
		} else {
			for (; i < n; i++)
				values[i] = list[i] * scale;
		}
		return values;
	},
	getIntArray: function (map, name) {
		var list = map[name];
		var values = new spine.Uint16Array(list.length);
		for (var i = 0, n = list.length; i < n; i++)
			values[i] = list[i] | 0;
		return values;
	}
};

spine.Atlas = function (atlasText, textureLoader) {
	this.textureLoader = textureLoader;
	this.pages = [];
	this.regions = [];

	var reader = new spine.AtlasReader(atlasText);
	var tuple = [];
	tuple.length = 4;
	var page = null;
	while (true) {
		var line = reader.readLine();
		if (line === null) break;
		line = reader.trim(line);
		if (!line.length)
			page = null;
		else if (!page) {
			page = new spine.AtlasPage();
			page.name = line;

			if (reader.readTuple(tuple) == 2) { // size is only optional for an atlas packed with an old TexturePacker.
				page.width = parseInt(tuple[0]);
				page.height = parseInt(tuple[1]);
				reader.readTuple(tuple);
			}
			page.format = spine.Atlas.Format[tuple[0]];

			reader.readTuple(tuple);
			page.minFilter = spine.Atlas.TextureFilter[tuple[0]];
			page.magFilter = spine.Atlas.TextureFilter[tuple[1]];

			var direction = reader.readValue();
			page.uWrap = spine.Atlas.TextureWrap.clampToEdge;
			page.vWrap = spine.Atlas.TextureWrap.clampToEdge;
			if (direction == "x")
				page.uWrap = spine.Atlas.TextureWrap.repeat;
			else if (direction == "y")
				page.vWrap = spine.Atlas.TextureWrap.repeat;
			else if (direction == "xy")
				page.uWrap = page.vWrap = spine.Atlas.TextureWrap.repeat;

			textureLoader.load(page, line, this);

			this.pages.push(page);

		} else {
			var region = new spine.AtlasRegion();
			region.name = line;
			region.page = page;

			region.rotate = reader.readValue() == "true";

			reader.readTuple(tuple);
			var x = parseInt(tuple[0]);
			var y = parseInt(tuple[1]);

			reader.readTuple(tuple);
			var width = parseInt(tuple[0]);
			var height = parseInt(tuple[1]);

			region.u = x / page.width;
			region.v = y / page.height;
			if (region.rotate) {
				region.u2 = (x + height) / page.width;
				region.v2 = (y + width) / page.height;
			} else {
				region.u2 = (x + width) / page.width;
				region.v2 = (y + height) / page.height;
			}
			region.x = x;
			region.y = y;
			region.width = Math.abs(width);
			region.height = Math.abs(height);

			if (reader.readTuple(tuple) == 4) { // split is optional
				region.splits = [parseInt(tuple[0]), parseInt(tuple[1]), parseInt(tuple[2]), parseInt(tuple[3])];

				if (reader.readTuple(tuple) == 4) { // pad is optional, but only present with splits
					region.pads = [parseInt(tuple[0]), parseInt(tuple[1]), parseInt(tuple[2]), parseInt(tuple[3])];

					reader.readTuple(tuple);
				}
			}

			region.originalWidth = parseInt(tuple[0]);
			region.originalHeight = parseInt(tuple[1]);

			reader.readTuple(tuple);
			region.offsetX = parseInt(tuple[0]);
			region.offsetY = parseInt(tuple[1]);

			region.index = parseInt(reader.readValue());

			this.regions.push(region);
		}
	}
};
spine.Atlas.prototype = {
	findRegion: function (name) {
		var regions = this.regions;
		for (var i = 0, n = regions.length; i < n; i++)
			if (regions[i].name == name) return regions[i];
		return null;
	},
	dispose: function () {
		var pages = this.pages;
		for (var i = 0, n = pages.length; i < n; i++)
			this.textureLoader.unload(pages[i].rendererObject);
	},
	updateUVs: function (page) {
		var regions = this.regions;
		for (var i = 0, n = regions.length; i < n; i++) {
			var region = regions[i];
			if (region.page != page) continue;
			region.u = region.x / page.width;
			region.v = region.y / page.height;
			if (region.rotate) {
				region.u2 = (region.x + region.height) / page.width;
				region.v2 = (region.y + region.width) / page.height;
			} else {
				region.u2 = (region.x + region.width) / page.width;
				region.v2 = (region.y + region.height) / page.height;
			}
		}
	}
};

spine.Atlas.Format = {
	alpha: 0,
	intensity: 1,
	luminanceAlpha: 2,
	rgb565: 3,
	rgba4444: 4,
	rgb888: 5,
	rgba8888: 6
};

spine.Atlas.TextureFilter = {
	nearest: 0,
	linear: 1,
	mipMap: 2,
	mipMapNearestNearest: 3,
	mipMapLinearNearest: 4,
	mipMapNearestLinear: 5,
	mipMapLinearLinear: 6
};

spine.Atlas.TextureWrap = {
	mirroredRepeat: 0,
	clampToEdge: 1,
	repeat: 2
};

spine.AtlasPage = function () {};
spine.AtlasPage.prototype = {
	name: null,
	format: null,
	minFilter: null,
	magFilter: null,
	uWrap: null,
	vWrap: null,
	rendererObject: null,
	width: 0,
	height: 0
};

spine.AtlasRegion = function () {};
spine.AtlasRegion.prototype = {
	page: null,
	name: null,
	x: 0, y: 0,
	width: 0, height: 0,
	u: 0, v: 0, u2: 0, v2: 0,
	offsetX: 0, offsetY: 0,
	originalWidth: 0, originalHeight: 0,
	index: 0,
	rotate: false,
	splits: null,
	pads: null
};

spine.AtlasReader = function (text) {
	this.lines = text.split(/\r\n|\r|\n/);
};
spine.AtlasReader.prototype = {
	index: 0,
	trim: function (value) {
		return value.replace(/^\s+|\s+$/g, "");
	},
	readLine: function () {
		if (this.index >= this.lines.length) return null;
		return this.lines[this.index++];
	},
	readValue: function () {
		var line = this.readLine();
		var colon = line.indexOf(":");
		if (colon == -1) throw "Invalid line: " + line;
		return this.trim(line.substring(colon + 1));
	},
	/** Returns the number of tuple values read (1, 2 or 4). */
	readTuple: function (tuple) {
		var line = this.readLine();
		var colon = line.indexOf(":");
		if (colon == -1) throw "Invalid line: " + line;
		var i = 0, lastMatch = colon + 1;
		for (; i < 3; i++) {
			var comma = line.indexOf(",", lastMatch);
			if (comma == -1) break;
			tuple[i] = this.trim(line.substr(lastMatch, comma - lastMatch));
			lastMatch = comma + 1;
		}
		tuple[i] = this.trim(line.substring(lastMatch));
		return i + 1;
	}
};

spine.AtlasAttachmentLoader = function (atlas) {
	this.atlas = atlas;
};
spine.AtlasAttachmentLoader.prototype = {
	newRegionAttachment: function (skin, name, path) {
		var region = this.atlas.findRegion(path);
		if (!region) throw "Region not found in atlas: " + path + " (region attachment: " + name + ")";
		var attachment = new spine.RegionAttachment(name);
		attachment.rendererObject = region;
		attachment.setUVs(region.u, region.v, region.u2, region.v2, region.rotate);
		attachment.regionOffsetX = region.offsetX;
		attachment.regionOffsetY = region.offsetY;
		attachment.regionWidth = region.width;
		attachment.regionHeight = region.height;
		attachment.regionOriginalWidth = region.originalWidth;
		attachment.regionOriginalHeight = region.originalHeight;
		return attachment;
	},
	newMeshAttachment: function (skin, name, path) {
		var region = this.atlas.findRegion(path);
		if (!region) throw "Region not found in atlas: " + path + " (mesh attachment: " + name + ")";
		var attachment = new spine.MeshAttachment(name);
		attachment.rendererObject = region;
		attachment.regionU = region.u;
		attachment.regionV = region.v;
		attachment.regionU2 = region.u2;
		attachment.regionV2 = region.v2;
		attachment.regionRotate = region.rotate;
		attachment.regionOffsetX = region.offsetX;
		attachment.regionOffsetY = region.offsetY;
		attachment.regionWidth = region.width;
		attachment.regionHeight = region.height;
		attachment.regionOriginalWidth = region.originalWidth;
		attachment.regionOriginalHeight = region.originalHeight;
		return attachment;
	},
	newSkinnedMeshAttachment: function (skin, name, path) {
		var region = this.atlas.findRegion(path);
		if (!region) throw "Region not found in atlas: " + path + " (skinned mesh attachment: " + name + ")";
		var attachment = new spine.SkinnedMeshAttachment(name);
		attachment.rendererObject = region;
		attachment.regionU = region.u;
		attachment.regionV = region.v;
		attachment.regionU2 = region.u2;
		attachment.regionV2 = region.v2;
		attachment.regionRotate = region.rotate;
		attachment.regionOffsetX = region.offsetX;
		attachment.regionOffsetY = region.offsetY;
		attachment.regionWidth = region.width;
		attachment.regionHeight = region.height;
		attachment.regionOriginalWidth = region.originalWidth;
		attachment.regionOriginalHeight = region.originalHeight;
		return attachment;
	},
	newBoundingBoxAttachment: function (skin, name) {
		return new spine.BoundingBoxAttachment(name);
	}
};

spine.SkeletonBounds = function () {
	this.polygonPool = [];
	this.polygons = [];
	this.boundingBoxes = [];
};
spine.SkeletonBounds.prototype = {
	minX: 0, minY: 0, maxX: 0, maxY: 0,
	update: function (skeleton, updateAabb) {
		var slots = skeleton.slots;
		var slotCount = slots.length;
		var x = skeleton.x, y = skeleton.y;
		var boundingBoxes = this.boundingBoxes;
		var polygonPool = this.polygonPool;
		var polygons = this.polygons;

		boundingBoxes.length = 0;
		for (var i = 0, n = polygons.length; i < n; i++)
			polygonPool.push(polygons[i]);
		polygons.length = 0;

		for (var i = 0; i < slotCount; i++) {
			var slot = slots[i];
			var boundingBox = slot.attachment;
			if (boundingBox.type != spine.AttachmentType.boundingbox) continue;
			boundingBoxes.push(boundingBox);

			var poolCount = polygonPool.length, polygon;
			if (poolCount > 0) {
				polygon = polygonPool[poolCount - 1];
				polygonPool.splice(poolCount - 1, 1);
			} else
				polygon = [];
			polygons.push(polygon);

			polygon.length = boundingBox.vertices.length;
			boundingBox.computeWorldVertices(x, y, slot.bone, polygon);
		}

		if (updateAabb) this.aabbCompute();
	},
	aabbCompute: function () {
		var polygons = this.polygons;
		var minX = Number.MAX_VALUE, minY = Number.MAX_VALUE, maxX = Number.MIN_VALUE, maxY = Number.MIN_VALUE;
		for (var i = 0, n = polygons.length; i < n; i++) {
			var vertices = polygons[i];
			for (var ii = 0, nn = vertices.length; ii < nn; ii += 2) {
				var x = vertices[ii];
				var y = vertices[ii + 1];
				minX = Math.min(minX, x);
				minY = Math.min(minY, y);
				maxX = Math.max(maxX, x);
				maxY = Math.max(maxY, y);
			}
		}
		this.minX = minX;
		this.minY = minY;
		this.maxX = maxX;
		this.maxY = maxY;
	},
	/** Returns true if the axis aligned bounding box contains the point. */
	aabbContainsPoint: function (x, y) {
		return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
	},
	/** Returns true if the axis aligned bounding box intersects the line segment. */
	aabbIntersectsSegment: function (x1, y1, x2, y2) {
		var minX = this.minX, minY = this.minY, maxX = this.maxX, maxY = this.maxY;
		if ((x1 <= minX && x2 <= minX) || (y1 <= minY && y2 <= minY) || (x1 >= maxX && x2 >= maxX) || (y1 >= maxY && y2 >= maxY))
			return false;
		var m = (y2 - y1) / (x2 - x1);
		var y = m * (minX - x1) + y1;
		if (y > minY && y < maxY) return true;
		y = m * (maxX - x1) + y1;
		if (y > minY && y < maxY) return true;
		var x = (minY - y1) / m + x1;
		if (x > minX && x < maxX) return true;
		x = (maxY - y1) / m + x1;
		if (x > minX && x < maxX) return true;
		return false;
	},
	/** Returns true if the axis aligned bounding box intersects the axis aligned bounding box of the specified bounds. */
	aabbIntersectsSkeleton: function (bounds) {
		return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
	},
	/** Returns the first bounding box attachment that contains the point, or null. When doing many checks, it is usually more
	 * efficient to only call this method if {@link #aabbContainsPoint(float, float)} returns true. */
	containsPoint: function (x, y) {
		var polygons = this.polygons;
		for (var i = 0, n = polygons.length; i < n; i++)
			if (this.polygonContainsPoint(polygons[i], x, y)) return this.boundingBoxes[i];
		return null;
	},
	/** Returns the first bounding box attachment that contains the line segment, or null. When doing many checks, it is usually
	 * more efficient to only call this method if {@link #aabbIntersectsSegment(float, float, float, float)} returns true. */
	intersectsSegment: function (x1, y1, x2, y2) {
		var polygons = this.polygons;
		for (var i = 0, n = polygons.length; i < n; i++)
			if (polygons[i].intersectsSegment(x1, y1, x2, y2)) return this.boundingBoxes[i];
		return null;
	},
	/** Returns true if the polygon contains the point. */
	polygonContainsPoint: function (polygon, x, y) {
		var nn = polygon.length;
		var prevIndex = nn - 2;
		var inside = false;
		for (var ii = 0; ii < nn; ii += 2) {
			var vertexY = polygon[ii + 1];
			var prevY = polygon[prevIndex + 1];
			if ((vertexY < y && prevY >= y) || (prevY < y && vertexY >= y)) {
				var vertexX = polygon[ii];
				if (vertexX + (y - vertexY) / (prevY - vertexY) * (polygon[prevIndex] - vertexX) < x) inside = !inside;
			}
			prevIndex = ii;
		}
		return inside;
	},
	/** Returns true if the polygon contains the line segment. */
	polygonIntersectsSegment: function (polygon, x1, y1, x2, y2) {
		var nn = polygon.length;
		var width12 = x1 - x2, height12 = y1 - y2;
		var det1 = x1 * y2 - y1 * x2;
		var x3 = polygon[nn - 2], y3 = polygon[nn - 1];
		for (var ii = 0; ii < nn; ii += 2) {
			var x4 = polygon[ii], y4 = polygon[ii + 1];
			var det2 = x3 * y4 - y3 * x4;
			var width34 = x3 - x4, height34 = y3 - y4;
			var det3 = width12 * height34 - height12 * width34;
			var x = (det1 * width34 - width12 * det2) / det3;
			if (((x >= x3 && x <= x4) || (x >= x4 && x <= x3)) && ((x >= x1 && x <= x2) || (x >= x2 && x <= x1))) {
				var y = (det1 * height34 - height12 * det2) / det3;
				if (((y >= y3 && y <= y4) || (y >= y4 && y <= y3)) && ((y >= y1 && y <= y2) || (y >= y2 && y <= y1))) return true;
			}
			x3 = x4;
			y3 = y4;
		}
		return false;
	},
	getPolygon: function (attachment) {
		var index = this.boundingBoxes.indexOf(attachment);
		return index == -1 ? null : this.polygons[index];
	},
	getWidth: function () {
		return this.maxX - this.minX;
	},
	getHeight: function () {
		return this.maxY - this.minY;
	}
};

},{}],95:[function(require,module,exports){
/**
 * @file        Main export of the PIXI spine library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    Spine:              require('./Spine')
};

},{"./Spine":93}],96:[function(require,module,exports){
var core = require('../core');

/**
 * A BitmapText object will create a line or multiple lines of text using bitmap font. To
 * split a line you can use '\n', '\r' or '\r\n' in your string. You can generate the fnt files using:
 *
 * http://www.angelcode.com/products/bmfont/ for windows or
 * http://www.bmglyph.com/ for mac.
 *
 * @class
 * @extends DisplayObjectContainer
 * @namespace PIXI
 * @param text {string} The copy that you would like the text to display
 * @param style {object} The style parameters
 * @param style.font {string} The size (optional) and bitmap font id (required) eq 'Arial' or '20px Arial' (must have loaded previously)
 * @param [style.align='left'] {string} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 */
function BitmapText(text, style) {
    core.DisplayObjectContainer.call(this);

    /**
     * The width of the overall text, different from fontSize,
     * which is defined in the style object
     *
     * @member {number}
     * @readOnly
     */
    this.textWidth = 0;

    /**
     * The height of the overall text, different from fontSize,
     * which is defined in the style object
     *
     * @member {number}
     * @readOnly
     */
    this.textHeight = 0;

    /**
     * Private tracker for the letter sprite pool.
     *
     * @member {Sprite[]}
     * @private
     */
    this._pool = [];

    /**
     * Private tracker for the current style.
     *
     * @member {object}
     * @private
     */
    this._style = {
        tint: style.tint,
        align: style.align,
        fontName: null,
        fontSize: 0
    };
    this.font = style.font; // run font setter

    /**
     * Private tracker for the current text.
     *
     * @member {string}
     * @private
     */
    this._text = text;

    /**
     * The dirty state of this object.
     *
     * @member {boolean}
     */
    this.dirty = false;

    this.updateText();
}

// constructor
BitmapText.prototype = Object.create(core.DisplayObjectContainer.prototype);
BitmapText.prototype.constructor = BitmapText;
module.exports = BitmapText;

Object.defineProperties(BitmapText.prototype, {
    /**
     * The tint of the BitmapText object
     *
     * @member {number}
     * @memberof BitmapText#
     */
    tint: {
        get: function () {
            return this._style.tint;
        },
        set: function (value) {
            this._style.tint = (typeof value === 'number' && value >= 0) ? value : 0xFFFFFF;

            this.dirty = true;
        }
    },

    /**
     * The tint of the BitmapText object
     *
     * @member {string}
     * @default 'left'
     * @memberof BitmapText#
     */
    align: {
        get: function () {
            return this._style.align;
        },
        set: function (value) {
            this._style.align = value;

            this.dirty = true;
        }
    },

    /**
     * The tint of the BitmapText object
     *
     * @member {Font}
     * @memberof BitmapText#
     */
    font: {
        get: function () {
            return this._style.font;
        },
        set: function (value) {
            value = value.split(' ');

            // TODO - This should be object-based not string based like it has been.
            this._style.fontName = value[value.length - 1];
            this._style.fontSize = value.length >= 2 ? parseInt(value[value.length - 2], 10) : BitmapText.fonts[this.fontName].size;

            this.dirty = true;
        }
    },

    /**
     * The text of the BitmapText object
     *
     * @member {string}
     * @memberof BitmapText#
     */
    text: {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;

            this.dirty = true;
        }
    }
});

/**
 * Renders text and updates it when needed
 *
 * @private
 */
BitmapText.prototype.updateText = function () {
    var data = BitmapText.fonts[this.fontName];
    var pos = new core.math.Point();
    var prevCharCode = null;
    var chars = [];
    var maxLineWidth = 0;
    var lineWidths = [];
    var line = 0;
    var scale = this.fontSize / data.size;

    for (var i = 0; i < this.text.length; i++) {
        var charCode = this.text.charCodeAt(i);

        if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
            lineWidths.push(pos.x);
            maxLineWidth = Math.max(maxLineWidth, pos.x);
            line++;

            pos.x = 0;
            pos.y += data.lineHeight;
            prevCharCode = null;
            continue;
        }

        var charData = data.chars[charCode];

        if (!charData) {
            continue;
        }

        if (prevCharCode && charData.kerning[prevCharCode]) {
            pos.x += charData.kerning[prevCharCode];
        }

        chars.push({texture:charData.texture, line: line, charCode: charCode, position: new core.math.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)});
        pos.x += charData.xAdvance;

        prevCharCode = charCode;
    }

    lineWidths.push(pos.x);
    maxLineWidth = Math.max(maxLineWidth, pos.x);

    var lineAlignOffsets = [];

    for (i = 0; i <= line; i++) {
        var alignOffset = 0;

        if (this.style.align === 'right') {
            alignOffset = maxLineWidth - lineWidths[i];
        }
        else if (this.style.align === 'center') {
            alignOffset = (maxLineWidth - lineWidths[i]) / 2;
        }

        lineAlignOffsets.push(alignOffset);
    }

    var lenChildren = this.children.length;
    var lenChars = chars.length;
    var tint = this.tint;

    for (i = 0; i < lenChars; i++) {
        var c = i < lenChildren ? this.children[i] : this._pool.pop(); // get old child if have. if not - take from pool.

        if (c) {
            c.setTexture(chars[i].texture); // check if got one before.
        }
        else {
            c = new core.Sprite(chars[i].texture); // if no create new one.
        }

        c.position.x = (chars[i].position.x + lineAlignOffsets[chars[i].line]) * scale;
        c.position.y = chars[i].position.y * scale;
        c.scale.x = c.scale.y = scale;
        c.tint = tint;

        if (!c.parent) {
            this.addChild(c);
        }
    }

    // remove unnecessary children.
    // and put their into the pool.
    while(this.children.length > lenChars) {
        var child = this.getChildAt(this.children.length - 1);
        this._pool.push(child);
        this.removeChild(child);
    }

    this.textWidth = maxLineWidth * scale;
    this.textHeight = (pos.y + data.lineHeight) * scale;
};

/**
 * Updates the transform of this object
 *
 * @private
 */
BitmapText.prototype.updateTransform = function () {
    if (this.dirty) {
        this.updateText();
        this.dirty = false;
    }

    this.displayObjectContainerUpdateTransform();
};

BitmapText.fonts = {};

},{"../core":9}],97:[function(require,module,exports){
var core = require('../core');

/**
 * A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string,
 * or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *
 * @class
 * @extends Sprite
 * @namespace PIXI
 * @param text {string} The copy that you would like the text to display
 * @param [style] {object} The style parameters
 * @param [style.font] {string} default 'bold 20px Arial' The style and size of the font
 * @param [style.fill='black'] {String|Number} A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'
 * @param [style.align='left'] {string} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.stroke] {String|Number} A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.wordWrap=false] {boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {number} The width at which text will wrap, it needs wordWrap to be set to true
 * @param [style.dropShadow=false] {boolean} Set a drop shadow for the text
 * @param [style.dropShadowColor='#000000'] {string} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowAngle=Math.PI/4] {number} Set a angle of the drop shadow
 * @param [style.dropShadowDistance=5] {number} Set a distance of the drop shadow
 */
function Text(text, style) {
    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * The canvas 2d context that everything is drawn with
     * @member {HTMLCanvasElement}
     */
    this.context = this.canvas.getContext('2d');

    /**
     * The resolution of the canvas.
     * @member {number}
     */
    this.resolution = 1;

    core.Sprite.call(this, core.Texture.fromCanvas(this.canvas));

    this.setText(text);
    this.setStyle(style);
}

// constructor
Text.prototype = Object.create(core.Sprite.prototype);
Text.prototype.constructor = Text;
module.exports = Text;

Object.defineProperties(Text.prototype, {
    /**
     * The width of the Text, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof Text#
     */
    width: {
        get: function () {
            if (this.dirty) {
                this.updateText();
                this.dirty = false;
            }

            return this.scale.x * this.texture.frame.width;
        },
        set: function (value) {
            this.scale.x = value / this.texture.frame.width;
            this._width = value;
        }
    },

    /**
     * The height of the Text, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     * @memberof Text#
     */
    height: {
        get: function () {
            if (this.dirty) {
                this.updateText();
                this.dirty = false;
            }

            return  this.scale.y * this.texture.frame.height;
        },
        set: function (value) {
            this.scale.y = value / this.texture.frame.height;
            this._height = value;
        }
    }
});

/**
 * Set the style of the text
 *
 * @param [style] {object} The style parameters
 * @param [style.font='bold 20pt Arial'] {string} The style and size of the font
 * @param [style.fill='black'] {object} A canvas fillstyle that will be used on the text eg 'red', '#00FF00'
 * @param [style.align='left'] {string} Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
 * @param [style.stroke='black'] {string} A canvas fillstyle that will be used on the text stroke eg 'blue', '#FCFF00'
 * @param [style.strokeThickness=0] {number} A number that represents the thickness of the stroke. Default is 0 (no stroke)
 * @param [style.wordWrap=false] {boolean} Indicates if word wrap should be used
 * @param [style.wordWrapWidth=100] {number} The width at which text will wrap
 * @param [style.dropShadow=false] {boolean} Set a drop shadow for the text
 * @param [style.dropShadowColor='#000000'] {string} A fill style to be used on the dropshadow e.g 'red', '#00FF00'
 * @param [style.dropShadowAngle=Math.PI/4] {number} Set a angle of the drop shadow
 * @param [style.dropShadowDistance=5] {number} Set a distance of the drop shadow
 */
Text.prototype.setStyle = function (style) {
    style = style || {};
    style.font = style.font || 'bold 20pt Arial';
    style.fill = style.fill || 'black';
    style.align = style.align || 'left';
    style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
    style.strokeThickness = style.strokeThickness || 0;
    style.wordWrap = style.wordWrap || false;
    style.wordWrapWidth = style.wordWrapWidth || 100;

    style.dropShadow = style.dropShadow || false;
    style.dropShadowAngle = style.dropShadowAngle || Math.PI / 6;
    style.dropShadowDistance = style.dropShadowDistance || 4;
    style.dropShadowColor = style.dropShadowColor || 'black';

    this.style = style;
    this.dirty = true;
};

/**
 * Set the copy for the text object. To split a line you can use '\n'.
 *
 * @param text {string} The copy that you would like the text to display
 */
Text.prototype.setText = function (text) {
    this.text = text.toString() || ' ';
    this.dirty = true;
};

/**
 * Renders text and updates it when needed
 *
 * @private
 */
Text.prototype.updateText = function () {
    this.texture.baseTexture.resolution = this.resolution;

    this.context.font = this.style.font;

    var outputText = this.text;

    // word wrap
    // preserve original text
    if (this.style.wordWrap) {
        outputText = this.wordWrap(this.text);
    }

    //split text into lines
    var lines = outputText.split(/(?:\r\n|\r|\n)/);

    //calculate text width
    var lineWidths = [];
    var maxLineWidth = 0;
    var fontProperties = this.determineFontProperties(this.style.font);
    for (var i = 0; i < lines.length; i++) {
        var lineWidth = this.context.measureText(lines[i]).width;
        lineWidths[i] = lineWidth;
        maxLineWidth = Math.max(maxLineWidth, lineWidth);
    }

    var width = maxLineWidth + this.style.strokeThickness;
    if (this.style.dropShadow) {
        width += this.style.dropShadowDistance;
    }

    this.canvas.width = ( width + this.context.lineWidth ) * this.resolution;

    //calculate text height
    var lineHeight = fontProperties.fontSize + this.style.strokeThickness;

    var height = lineHeight * lines.length;
    if (this.style.dropShadow) {
        height += this.style.dropShadowDistance;
    }

    this.canvas.height = height * this.resolution;

    this.context.scale( this.resolution, this.resolution);

    if (navigator.isCocoonJS) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // used for debugging..
    //this.context.fillStyle ="#FF0000"
    //this.context.fillRect(0, 0, this.canvas.width,this.canvas.height);

    this.context.font = this.style.font;
    this.context.strokeStyle = this.style.stroke;
    this.context.lineWidth = this.style.strokeThickness;
    this.context.textBaseline = 'alphabetic';
    //this.context.lineJoin = 'round';

    var linePositionX;
    var linePositionY;

    if (this.style.dropShadow) {
        this.context.fillStyle = this.style.dropShadowColor;

        var xShadowOffset = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
        var yShadowOffset = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance;

        for (i = 0; i < lines.length; i++) {
            linePositionX = this.style.strokeThickness / 2;
            linePositionY = (this.style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;

            if (this.style.align === 'right') {
                linePositionX += maxLineWidth - lineWidths[i];
            }
            else if (this.style.align === 'center') {
                linePositionX += (maxLineWidth - lineWidths[i]) / 2;
            }

            if (this.style.fill) {
                this.context.fillText(lines[i], linePositionX + xShadowOffset, linePositionY + yShadowOffset);
            }

          //  if (dropShadow)
        }
    }

    //set canvas text styles
    this.context.fillStyle = this.style.fill;

    //draw lines line by line
    for (i = 0; i < lines.length; i++) {
        linePositionX = this.style.strokeThickness / 2;
        linePositionY = (this.style.strokeThickness / 2 + i * lineHeight) + fontProperties.ascent;

        if (this.style.align === 'right') {
            linePositionX += maxLineWidth - lineWidths[i];
        }
        else if (this.style.align === 'center') {
            linePositionX += (maxLineWidth - lineWidths[i]) / 2;
        }

        if (this.style.stroke && this.style.strokeThickness) {
            this.context.strokeText(lines[i], linePositionX, linePositionY);
        }

        if (this.style.fill) {
            this.context.fillText(lines[i], linePositionX, linePositionY);
        }

      //  if (dropShadow)
    }

    this.updateTexture();
};

/**
 * Updates texture size based on canvas size
 *
 * @private
 */
Text.prototype.updateTexture = function () {
    this.texture.baseTexture.width = this.canvas.width;
    this.texture.baseTexture.height = this.canvas.height;
    this.texture.crop.width = this.texture.frame.width = this.canvas.width;
    this.texture.crop.height = this.texture.frame.height = this.canvas.height;

    this._width = this.canvas.width;
    this._height = this.canvas.height;

    // update the dirty base textures
    this.texture.baseTexture.dirty();
};

/**
 * Renders the object using the WebGL renderer
*
 * @param renderer {WebGLRenderer}
 */
Text.prototype.renderWebGL = function (renderer) {
    if (this.dirty) {
        this.resolution = renderer.resolution;

        this.updateText();
        this.dirty = false;
    }

    core.Sprite.prototype.renderWebGL.call(this, renderer);
};

/**
 * Renders the object using the Canvas renderer
*
 * @param renderer {CanvasRenderer}
 */
Text.prototype.renderCanvas = function (renderer) {
    if (this.dirty) {
        this.resolution = renderer.resolution;

        this.updateText();
        this.dirty = false;
    }

    core.Sprite.prototype.renderCanvas.call(this, renderer);
};

/**
 * Calculates the ascent, descent and fontSize of a given fontStyle
*
 * @param fontStyle {object}
 * @private
 */
Text.prototype.determineFontProperties = function (fontStyle) {
    var properties = Text.fontPropertiesCache[fontStyle];

    if (!properties) {
        properties = {};

        var canvas = Text.fontPropertiesCanvas;
        var context = Text.fontPropertiesContext;

        context.font = fontStyle;

        var width = Math.ceil(context.measureText('|Mq').width);
        var baseline = Math.ceil(context.measureText('M').width);
        var height = 2 * baseline;

        baseline = baseline * 1.4 | 0;

        canvas.width = width;
        canvas.height = height;

        context.fillStyle = '#f00';
        context.fillRect(0, 0, width, height);

        context.font = fontStyle;

        context.textBaseline = 'alphabetic';
        context.fillStyle = '#000';
        context.fillText('|MÉq', 0, baseline);

        var imagedata = context.getImageData(0, 0, width, height).data;
        var pixels = imagedata.length;
        var line = width * 4;

        var i, j;

        var idx = 0;
        var stop = false;

        // ascent. scan from top to bottom until we find a non red pixel
        for (i = 0; i < baseline; i++) {
            for (j = 0; j < line; j += 4) {
                if (imagedata[idx + j] !== 255) {
                    stop = true;
                    break;
                }
            }
            if (!stop) {
                idx += line;
            }
            else {
                break;
            }
        }

        properties.ascent = baseline - i;

        idx = pixels - line;
        stop = false;

        // descent. scan from bottom to top until we find a non red pixel
        for (i = height; i > baseline; i--) {
            for (j = 0; j < line; j += 4) {
                if (imagedata[idx + j] !== 255) {
                    stop = true;
                    break;
                }
            }
            if (!stop) {
                idx -= line;
            }
            else {
                break;
            }
        }

        properties.descent = i - baseline;
        //TODO might need a tweak. kind of a temp fix!
        properties.descent += 6;
        properties.fontSize = properties.ascent + properties.descent;

        Text.fontPropertiesCache[fontStyle] = properties;
    }

    return properties;
};

/**
 * Applies newlines to a string to have it optimally fit into the horizontal
 * bounds set by the Text object's wordWrapWidth property.
 *
 * @param text {string}
 * @private
 */
Text.prototype.wordWrap = function (text) {
    // Greedy wrapping algorithm that will wrap words as the line grows longer
    // than its horizontal bounds.
    var result = '';
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var spaceLeft = this.style.wordWrapWidth;
        var words = lines[i].split(' ');
        for (var j = 0; j < words.length; j++) {
            var wordWidth = this.context.measureText(words[j]).width;
            var wordWidthWithSpace = wordWidth + this.context.measureText(' ').width;
            if (j === 0 || wordWidthWithSpace > spaceLeft) {
                // Skip printing the newline if it's the first word of the line that is
                // greater than the word wrap width.
                if (j > 0) {
                    result += '\n';
                }
                result += words[j];
                spaceLeft = this.style.wordWrapWidth - wordWidth;
            }
            else {
                spaceLeft -= wordWidthWithSpace;
                result += ' ' + words[j];
            }
        }

        if (i < lines.length-1) {
            result += '\n';
        }
    }
    return result;
};

/**
 * Returns the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.
 *
 * @param matrix {Matrix} the transformation matrix of the Text
 * @return {Rectangle} the framing rectangle
 */
Text.prototype.getBounds = function (matrix) {
    if (this.dirty) {
        this.updateText();
        this.dirty = false;
    }

    return core.Sprite.prototype.getBounds.call(this, matrix);
};

/**
 * Destroys this text object.
 *
 * @param destroyBaseTexture {boolean} whether to destroy the base texture as well
 */
Text.prototype.destroy = function (destroyBaseTexture) {
    // make sure to reset the the context and canvas.. dont want this hanging around in memory!
    this.context = null;
    this.canvas = null;

    this.texture.destroy(destroyBaseTexture === undefined ? true : destroyBaseTexture);
};

Text.fontPropertiesCache = {};
Text.fontPropertiesCanvas = document.createElement('canvas');
Text.fontPropertiesContext = Text.fontPropertiesCanvas.getContext('2d');

},{"../core":9}],98:[function(require,module,exports){
/**
 * @file        Main export of the PIXI text library
 * @author      Mat Groves <mat@goodboydigital.com>
 * @copyright   2013-2015 GoodBoyDigital
 * @license     {@link https://github.com/GoodBoyDigital/pixi.js/blob/master/LICENSE|MIT License}
 */

/**
 * @namespace PIXI
 */
module.exports = {
    Text:       require('./Text'),
    BitmapText: require('./BitmapText')
};

},{"./BitmapText":96,"./Text":97}]},{},[1])(1)
});