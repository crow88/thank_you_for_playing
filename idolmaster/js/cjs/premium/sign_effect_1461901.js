(function(lib, img, cjs) {

    var p; // shortcut to reference prototypes

    // stage content:
    (lib.sign_effect_1461901 = function() {
        this.initialize();

        // sign
        this.sign_effect = new lib.sign_effect_1461901_1();

        // image_replace
        this.instance = new lib.replace_image_1461901();

        this.addChild(this.instance, this.sign_effect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-8.7, 0, 648.8, 800);


    // symbols:
    (lib.replace_image_1461901 = function() {
        this.initialize(img.replace_image_1461901);
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


    (lib.reflect_mask_1461901 = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-123.5,-159,247,318.1);


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
        this.lighter_tgt.setTransform(0,-217.9,0.8762,0.8762,0,0,-20.0002);
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,-307.8,247,615.6);


    (lib.reflect_container_cjs_1461901 = function(mode, startPosition, loop) {
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
        this.preview.setTransform(-0.5,-0.1,1,1,0,0,0,-0.5,-0.1);
        this.preview.compositeOperation = "lighter";

        this.timeline.addTween(cjs.Tween.get({}).to({
            state: [{
                t: this.preview
            }]
        }).wait(39));

        // reflect
        this.instance = new lib.reflect();
        this.instance.setTransform(-0.5,466.95,1,1,0,0,0,-0.5,0.1);
        this.instance.compositeOperation = "lighter";
        this.instance._off = true;

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-466.7},9,cjs.Ease.get(1)).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0,-774.6,247,1549.3000000000002);


    (lib.glitter_inner = function() {
        this.initialize();

        // 繝ｬ繧､繝､繝ｼ 1
        this.instance = new lib.glitter_inner_sphere();
        this.instance.setTransform(0,0.05,1.5,0.0862,-45);

        this.instance_1 = new lib.glitter_inner_sphere();
        this.instance_1.setTransform(0,0,0.3342,0.3342);

        this.instance_2 = new lib.glitter_inner_sphere();
        this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

        this.instance_3 = new lib.glitter_inner_sphere();

        this.addChild(this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


    (lib.glitter = function() {
        this.initialize();

        // flare
        this.lighter_tgt = new lib.glitter_inner();
        this.lighter_tgt.compositeOperation = "lighter";

        this.addChild(this.lighter_tgt);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


    (lib.reflect_wrapper_1461901 = function() {
        this.initialize();

        // cjs
        this.reflect = new lib.reflect_container_cjs_1461901();
        this.reflect.compositeOperation = "lighter";

        this.addChild(this.reflect);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,-307.8,247,615.6);


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
    p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


    (lib.glitter_wrapper = function() {
        this.initialize();

        // cjs
        this.instance = new lib.glitter_container_cjs();

        this.addChild(this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


    (lib.sign_effect_1461901_1 = function() {
        this.initialize();

        // glitter
        this.instance = new lib.glitter_wrapper();
        this.instance.setTransform(582.75,335.15,0.9874,0.9874,0,0,0,0.1,0.1);

        this.instance_1 = new lib.glitter_wrapper();
        this.instance_1.setTransform(608.4,433.65,0.9874,0.9874,0,0,0,0.1,0.1);

        this.instance_2 = new lib.glitter_wrapper();
        this.instance_2.setTransform(554.9,493.65,0.9874,0.9874,0,0,0,0.1,0.1);

        this.instance_3 = new lib.glitter_wrapper();
        this.instance_3.setTransform(379.25,386.15,0.7156,0.7156,0,0,0,0.1,0.1);

        this.instance_4 = new lib.glitter_wrapper();
        this.instance_4.setTransform(473.55,553.9,0.6836,0.6836,0,0,0,0.2,0.1);

        this.instance_5 = new lib.glitter_wrapper();
        this.instance_5.setTransform(446.95,427.15,0.6516,0.6516,0,0,0,0.1,0.1);

        this.instance_6 = new lib.glitter_wrapper();
        this.instance_6.setTransform(516.1,408.25,0.9874,0.9874);

        this.instance_7 = new lib.glitter_wrapper();
        this.instance_7.setTransform(483.7,305.3,0.9874,0.9874,0,0,0,0.1,0.1);

        // mask
        this.reflect_mask = new lib.reflect_mask_1461901();
        this.reflect_mask.setTransform(493.5,461.95);
        this.reflect_mask.alpha = 0;

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        mask.graphics.p("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");
        mask.setTransform(308.4976,310.5097);

        // reflect
        this.reflect_wrapper = new lib.reflect_wrapper_1461901();
        this.reflect_wrapper.setTransform(370,461.95);

        this.reflect_wrapper.mask = mask;

        this.addChild(this.reflect_wrapper, this.reflect_mask, this.instance_7, this.instance_6, this.instance_5, this.instance_4, this.instance_3, this.instance_2, this.instance_1, this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(32,162.1,631.7,747.6999999999999);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;
