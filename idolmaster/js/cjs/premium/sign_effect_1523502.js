(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1523502 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1523502_1();

        // image_replace
        this.instance = new lib.replace_image_1523502();

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-8.7, 0, 648.8, 800);


    // symbols:
    (lib.replace_image_1523502 = function() {
        this.initialize(img.replace_image_1523502);
    }).prototype = p = new cjs.Bitmap();
    p.nominalBounds = new cjs.Rectangle(0, 0, 640, 800);


    (lib.reflect_inner = function() {
        this.initialize();

        // standard
        this.shape = new cjs.Shape();
        this.shape.graphics.lf(["rgba(255,255,255,0)", "rgba(255,255,255,0.749)", "rgba(255,255,255,0)"], [0, 0.51, 1], 0, 297.1, 0.1, -296.9).s().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvg");
        this.shape.setTransform(150, 300);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, 0, 300, 600);


    (lib.reflect_mask_1523502 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-106.1, -138.1, 212.4, 276.3);


    (lib.glitter_inner_sphere = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.rf(["#FFFFFF", "rgba(255,255,255,0.302)", "rgba(255,255,255,0)"], [0, 0.522, 1], 0, 0, 0, 0, 0, 51.3).s().p("AlgFgQiTiRAAjPQAAjPCTiRQCRiTDPAAQDPAACRCTQCUCRAADPQAADPiUCRQiRCUjPAAQjPAAiRiUg");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-49.9, -49.9, 100, 100);


    (lib.reflect = function() {
        this.initialize();

        // main
        this.lighter_tgt = new lib.reflect_inner();
        this.lighter_tgt.setTransform(0, -187.3, 0.753, 0.753, 0, 0, -19.9);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -264.6, 212.4, 529.3);


    (lib.reflect_container_cjs_1523502 = function(mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {
            flash: 20
        });

        // timeline functions:
        this.frame_0 = function() {
            this.preview.visible = false;
        }
        this.frame_20 = function() {
            this.play();
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(18));

        // preview
        this.preview = new lib.reflect();
        this.preview.setTransform(-0.3, 0, 1, 1, 0, 0, 0, -0.4, 0);
        this.preview.compositeOperation = "lighter";

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.preview
            }]
        }).wait(39));

        // reflect
        this.instance = new lib.reflect();
        this.instance.setTransform(-0.3, 402.9, 1, 1, 0, 0, 0, -0.4, 0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({
            _off: false
        }, 0).to({
            regY: 0,
            y: 0
        }, 9, cjs.Ease.get(-0.99)).to({
            regY: 0.1,
            y: -402.5
        }, 9, cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, -264.6, 212.4, 529.3);


    (lib.glitter_inner = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.instance = new lib.glitter_inner_sphere();
        this.instance.setTransform(0, 0.1, 1.5, 0.086, -44.9);

        this.instance_1 = new lib.glitter_inner_sphere();
        this.instance_1.setTransform(0, 0, 0.334, 0.334);

        this.instance_2 = new lib.glitter_inner_sphere();
        this.instance_2.setTransform(0, 0, 1.5, 0.086, 45);

        this.instance_3 = new lib.glitter_inner_sphere();

        this.addChild(this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.glitter = function() {
        this.initialize();

        // flare
        this.lighter_tgt = new lib.glitter_inner();
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.reflect_wrapper_1523502 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1523502();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0, -264.6, 212.4, 529.3);


    (lib.glitter_container_cjs = function(mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {
            loop: 20
        });

        // timeline functions:
        this.frame_0 = function() {
            this.gotoAndPlay(Math.floor(Math.random() * 20));
        }
        this.frame_20 = function() {

        }
        this.frame_50 = function() {
            this.gotoAndPlay(0);
        }

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50));

        // mc
        this.lux = new lib.glitter();

        this.timeline.addTween(cjs.Tween.get(this.lux).to({
            _off: true
        }, 1).wait(19).to({
            alpha: 0,
            _off: false
        }, 0).to({
            scaleX: 0.73,
            scaleY: 0.73,
            alpha: 0.75
        }, 9, cjs.Ease.get(0.5)).to({
            scaleX: 0.7,
            scaleY: 0.7,
            alpha: 0
        }, 9, cjs.Ease.get(-0.49)).to({
            _off: true
        }, 1).wait(12));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.glitter_wrapper = function() {
        this.initialize();

        // cjs
        this.instance = new lib.glitter_container_cjs();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56, -56.1, 112.2, 112.3);


    (lib.sign_effect_1523502_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(210.8, 432.1);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(236.8, 517.8);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(189.5, 577.4);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(31.9, 475.7, 0.725, 0.725);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(121.2, 622.7, 0.692, 0.692);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(96.4, 512.3, 0.66, 0.66);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(155.5, 501.2);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(128.6, 405.5);

        // mask
        this.reflect_mask = new lib.reflect_mask_1523502();
        this.reflect_mask.setTransform(136.9, 544.8);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(121.6, 341.4);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1523502();
        this.reflect_wrapper.setTransform(30.8, 544.8);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-8.7, 280.1, 301.7, 529.3);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;