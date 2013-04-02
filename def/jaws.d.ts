// Jaws.JS Core Classes

interface Animation {
    // Fields
    bounce: bool;
    frame_direction: number;
    frame_duration: number;
    frame_size;
    frames;
    index: number;
    loop: bool;
    offset: number;
    on_end: Function;
    orientation: string;
    // Methods
    atFirstFrame(): bool;
    atLastFrame(): bool;
    currentFrame(): number;
    next(): number;
    slice(start, stop): Animation;
    toString(): string;
    update();
}

interface GameLoop {
    // Fields
    fps: number;
    tick_duration: number;
    ticks: number;
    // Methods
    loop();
    pause();
    runtime(): number;
    start();
    stop();
    unpause();
}

interface Parallax {
    // Fields
    camera_x: number;
    camera_y: number;
    repeat_x: bool;
    repeat_y: bool;
    scale: number;
    // Methods
    addLayer(options);
    draw(options);
    toString(): string;
}

interface ParallaxLayer extends Sprite {
    // Fields
    damping: number;
}

interface Rect {
    collidePoint(x: number, y: number): bool;
    collideRect(rect: Rect): bool;
    draw();
    getPosition(): Array;
    move(x: number, y: number);
    moveTo(x: number, y: number);
    resize(width: number, height: number);
    resizeTo(width: number, height: number);
}

interface Sprite {
    // Fields
    alpha: number;
    anchor: string;
    angle: number;
    flipped: bool;
    image: any;
    scale_image: number;
    x: number;
    y: number;

    // Methods
    asCanvas(): HTMLCanvasElement;
    asCanvasContext(): CanvasRenderingContext2D;
    attributes(): Array;
    draw();
    flip();
    move(x, y);
    moveTo(x, y);
    rect(): Rect; // TODO: Return Type
    resize(width: number, height: number);
    resizeTo(width: number, height: number);
    rotate(value: number);
    rotateTo(value: number);
    scaleAll(value: number);
    scaleHeight(value: number);
    scaleImage(factor: number);
    scaleTo(value: number);
    scaleWidth(value: number);
    setAnchor(value: number);
    setBottom(value: number);
    setHeight(value: number);
    setImage(value: number);
    setLeft(value: number);
    setRight(value: number);
    setTop(value: number);
    setWidth(value: number);
    setX(value: number);
    setY(value: number);
    toJSON(): Array;
}

interface SpriteList {
    // Methods
    at(index: number): any;
    concat(): SpriteList;
    deleteIf(condition);
    draw();
    drawIf(condition);
    every(): bool;
    filter(): Array;
    forEach();
    indexOf(searchElement, fromIndex: number): number;
    isSpriteList(): bool;
    join(separator?: string): string;
    lastIndexOf(): number;
    load(objects: Sprite[]);
    load(objects: string);
    load(objects: any);
    map(): Array;
    pop(): Sprite;
    push(object): number;
    reduce(): any;
    reduceRight(): any;
    remove(obj);
    removeIf(condition);
    reverse();
    shift(): Sprite;
    slice(start: number, end: number): Sprite;
    some(callback: Function): bool;
    sort(callback: Function);
    splice(index: number): SpriteList;
    splice(index: number, howMany: number): SpriteList;
    unshift(): number;
    update();
    updateIf(condition);
    updateLength();
    valueOf(): string;
}

interface SpriteSheet {
    // Fields
    frame_size: Array;
    frames: Array;
    offset: number;
    orientation: string;
    scale_image: number;
}

interface TileMap {
    // Fields
    cell_size: Array;
    size: Array;
    sortFunction: Function;
    // Methods
    all(): Array;
    at(x, y): Array;
    atRect(rect: Rect): Array;
    cell(col, row): Array;
    clear();
    findPath(start_position, end_position, inverted): Array;
    push(obj: any);
    push(obj: Array);
    pushAsPoint(obj: any);
    pushAsPoint(obj: Array);
    pushAsRect(obj: any, rect: Rect);
    pushAsRect(obj: Array, rect: Rect);
    pushToCell(col: number, row: number, obj: any);
    pushToCell(col: number, row: number, obj: Array);
    sortCells(sortFunction: Function);
    toString(): string;
}

interface Viewport {
    // Fields
    height: number;
    max_x: number;
    max_y: number;
    width: number;
    x: number;
    y: number;
    // Methods
    apply(func);
    centerAround(item);
    draw(obj: Sprite);
    draw(obj: Array);
    drawIfPartlyInside(item);
    drawTileMap(tile_map: TileMap);
    forceInside(item, buffer: number);
    forceInsideVisibleArea(item, buffer: number);
    isAbove(item): bool;
    isBelow(item): bool;
    isInside(item): bool;
    isLeftOf(item): bool;
    isOutside(item): bool;
    isPartlyInside(item): bool;
    isRightOf(item): bool;
    move(x: number, y: number);
    moveTo(x: number, y: number);
}

declare var jaws: {
    // Fields
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    height: number;
    mouse_x: number;
    mouse_y: number;
    width: number;
    // Static Methods
    clear(): void;
    collideCircles(object1, object2): Array;
    collideManyWithMany(list1, list2): Array;
    collideOneWithOne(object1, object2): Array;
    distanceBetween(object1, object2);
    forceArray(object): Array;
    forceInsideCanvas(item);
    getUrlParameters(): Array;
    imageToCanvas(image): any; // Needs return type
    isArray(object): bool;
    isCanvas(object): bool;
    isDrawable(object): bool;
    isFunction(object): bool;
    isImage(object): bool;
    isOutsideCanvas(item): bool;
    isString(object): bool;
    log(msg, append);
    on_keydown(key, callback);
    on_keyup(key, callback);
    parseOptions(object, options, defaults);
    pressed(key): bool;
    preventDefaultKeys(array_of_strings);
    start(game_state, options?, game_stat_setup_options?);
    switchGameState(game_state, options, game_stat_setup_options);
    unpack();

    Animation: {
        new (options: any): Animation;
    };

    GameLoop: {
        new (game_object, options: any, game_state_setup_options: any): GameLoop;
    };

    gfx: {
        retroScaleImage(image, factor: number): HTMLCanvasElement;
    };

    Parallax: {
        new (options): Parallax;
    };

    ParallaxLayer: {
        new (options): ParallaxLayer;
    };

    Rect: {
        new (x: number, y: number, width: number, height: number): Rect;
    };

    Sprite: {
        new (options: any): Sprite;
    };

    SpriteList: {
        new (options: any): SpriteList;
    };

    SpriteSheet: {
        new (options: any): SpriteSheet;
    };

    TileMap: {
        new (options: any): TileMap;
    };

    Viewport: {
        new (options: any): Viewport;
    };

    assets: {
        // Fields
        bust_cache: bool;
        fuchia_to_transparent: bool;
        // Methods
        add(src: string);
        add(src: string[]);
        getOrLoad(src: string, onload: Function, onerror: Function);
        isLoaded(src: string): bool;
        isLoaded(src: string[]): bool;
        isLoading(src: string): bool;
        isLoading(src: string[]): bool;
        load(src: string, onload: Function, onerror: Function);
        loadAll(options);
    };
}

/*
export class jaws {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    height: number;
    mouse_x: number;
    mouse_y: number;
    width: number;

    static clear();
    static collideCircles(object1, object2): Array;
    static collideManyWithMany(list1, list2): Array;
    static collideOneWithOne(object1, object2): Array;
    static collideRects(rect1, rect2): bool;
    private combinations(list, n);
    static distanceBetween(object1, object2);
    static forceArray(object): Array;
    static forceInsideCanvas(item);
    static getUrlParameters(): Array;
    static imageToCanvas(image): any; // Needs return type
    static isArray(object): bool;
    static isCanvas(object): bool;
    static isDrawable(object): bool;
    static isFunction(object): bool;
    static isImage(object): bool;
    static isOutsideCanvas(item): bool;
    static isString(object): bool;
    static log(msg, append);
    static on_keydown(key, callback);
    static on_keyup(key, callback);
    static parseOptions(object, options, defaults);
    static pressed(key): bool;
    static preventDefaultKeys(array_of_strings);
    static start(game_state, options, game_stat_setup_options);
    static switchGameState(game_state, options, game_stat_setup_options);
    static unpack();
}

module jaws_module {
    export class Sprite {
    }
}
*/