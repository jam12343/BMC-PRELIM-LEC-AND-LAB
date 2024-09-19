// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_sdk.src__widgets__framework;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const single_child_scroll_view = flutter_sdk.src__widgets__single_child_scroll_view;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const dropdown = flutter_sdk.src__material__dropdown;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $isEmpty = dartx.isEmpty;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    IdentityMapOfString$int: () => (T.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))(),
    JSArrayOfnum: () => (T.JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))(),
    ListOfnum: () => (T.ListOfnum = dart.constFn(core.List$(core.num)))(),
    IdentityMapOfString$ListOfnum: () => (T.IdentityMapOfString$ListOfnum = dart.constFn(_js_helper.IdentityMap$(core.String, T.ListOfnum())))(),
    DropdownButtonOfString: () => (T.DropdownButtonOfString = dart.constFn(dropdown.DropdownButton$(core.String)))(),
    DropdownMenuItemOfString: () => (T.DropdownMenuItemOfString = dart.constFn(dropdown.DropdownMenuItem$(core.String)))(),
    StringToDropdownMenuItemOfString: () => (T.StringToDropdownMenuItemOfString = dart.constFn(dart.fnType(T.DropdownMenuItemOfString(), [core.String])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNTovoid: () => (T.StringNTovoid = dart.constFn(dart.fnType(dart.void, [T.StringN()])))(),
    StringTovoid: () => (T.StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main.MyAppState.new();
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(main.MyAppState, [])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var inputStyle = dart.privateName(main, "MyAppState.inputStyle");
  var labelStyle = dart.privateName(main, "MyAppState.labelStyle");
  var _numberFrom = dart.privateName(main, "_numberFrom");
  var _startMeasure = dart.privateName(main, "_startMeasure");
  var _resultMessage = dart.privateName(main, "_resultMessage");
  var _convertedMeasure = dart.privateName(main, "_convertedMeasure");
  var _measures = dart.privateName(main, "_measures");
  var _measuresMap = dart.privateName(main, "_measuresMap");
  var _formulas = dart.privateName(main, "_formulas");
  main.MyAppState = class MyAppState extends framework.State$(main.MyApp) {
    get inputStyle() {
      return this[inputStyle];
    }
    set inputStyle(value) {
      super.inputStyle = value;
    }
    get labelStyle() {
      return this[labelStyle];
    }
    set labelStyle(value) {
      super.labelStyle = value;
    }
    initState() {
      this[_numberFrom] = 0;
      super.initState();
    }
    convert(value, from, to) {
      let nFrom = this[_measuresMap][$_get](from);
      let nTo = this[_measuresMap][$_get](to);
      let multiplier = dart.dsend(dart.dsend(this[_formulas], '_get', [dart.toString(nFrom)]), '_get', [nTo]);
      let result = value * core.num.as(multiplier);
      if (result === 0) {
        this[_resultMessage] = "This conversion cannot be performed";
      } else {
        this[_resultMessage] = this[_numberFrom][$toString]() + " " + dart.str(this[_startMeasure]) + " are " + result[$toString]() + " " + dart.str(this[_convertedMeasure]);
      }
      this.setState(dart.fn(() => {
        this[_resultMessage] = this[_resultMessage];
      }, T.VoidTovoid()));
    }
    build(context) {
      return new app.MaterialApp.new({title: "Measures Converter", home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Measures Converter")}), body: new container.Container.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: 20}), child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: T.JSArrayOfWidget().of([new basic.SizedBox.new({height: 20}), new text.Text.new("Value", {style: this.labelStyle}), new (T.DropdownButtonOfString()).new({items: this[_measures][$map](T.DropdownMenuItemOfString(), dart.fn(value => new (T.DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value)}), T.StringToDropdownMenuItemOfString()))[$toList](), onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_startMeasure] = value;
                      }, T.VoidTovoid()));
                    }, T.StringNTovoid()), value: this[_startMeasure]}), new basic.SizedBox.new({height: 10}), new text_field.TextField.new({style: this.inputStyle, decoration: new input_decorator.InputDecoration.new({hintText: "Please insert the measure to be converted"}), onChanged: dart.fn(text => {
                      let rv = core.double.tryParse(text);
                      if (rv != null) {
                        this.setState(dart.fn(() => {
                          this[_numberFrom] = rv;
                        }, T.VoidTovoid()));
                      }
                    }, T.StringTovoid())}), new basic.SizedBox.new({height: 20}), new text.Text.new("From", {style: this.labelStyle}), new (T.DropdownButtonOfString()).new({isExpanded: true, items: this[_measures][$map](T.DropdownMenuItemOfString(), dart.fn(value => new (T.DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value)}), T.StringToDropdownMenuItemOfString()))[$toList](), onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_startMeasure] = value;
                      }, T.VoidTovoid()));
                    }, T.StringNTovoid()), value: this[_startMeasure]}), new basic.SizedBox.new({height: 20}), new text.Text.new("To", {style: this.labelStyle}), new (T.DropdownButtonOfString()).new({isExpanded: true, style: this.inputStyle, items: this[_measures][$map](T.DropdownMenuItemOfString(), dart.fn(value => new (T.DropdownMenuItemOfString()).new({value: value, child: new text.Text.new(value, {style: this.inputStyle})}), T.StringToDropdownMenuItemOfString()))[$toList](), onChanged: dart.fn(value => {
                      this.setState(dart.fn(() => {
                        this[_convertedMeasure] = value;
                      }, T.VoidTovoid()));
                    }, T.StringNTovoid()), value: T.StringN().as(this[_convertedMeasure])}), new basic.SizedBox.new({height: 40}), new elevated_button.ElevatedButton.new({child: new text.Text.new("Convert", {style: this.inputStyle}), onPressed: dart.fn(() => {
                      if (dart.nullCheck(this[_startMeasure])[$isEmpty] || dart.dtest(dart.dload(this[_convertedMeasure], 'isEmpty')) || this[_numberFrom] === 0) {
                        return;
                      } else {
                        this.convert(this[_numberFrom], dart.nullCheck(this[_startMeasure]), core.String.as(this[_convertedMeasure]));
                      }
                    }, T.VoidTovoid())}), new basic.SizedBox.new({height: 20}), new text.Text.new(this[_numberFrom] === null ? "" : this[_numberFrom][$toString](), {style: this.labelStyle, textAlign: ui.TextAlign.center}), new text.Text.new(core.String.as(this[_resultMessage] == null ? "" : this[_resultMessage]), {style: this.labelStyle})])})})})})});
    }
    static ['_#new#tearOff']() {
      return new main.MyAppState.new();
    }
  };
  (main.MyAppState.new = function() {
    this[_numberFrom] = 0;
    this[_startMeasure] = null;
    this[_resultMessage] = null;
    this[_convertedMeasure] = null;
    this[_measures] = T.JSArrayOfString().of(["meters", "kilometers", "grams", "kilograms", "feet", "miles", "pounds (lbs)", "ounces"]);
    this[inputStyle] = new text_style.TextStyle.new({fontSize: 20, color: colors.Colors.blue._get(900)});
    this[labelStyle] = new text_style.TextStyle.new({fontSize: 24, color: colors.Colors.grey._get(700)});
    this[_measuresMap] = new (T.IdentityMapOfString$int()).from(["meters", 0, "kilometers", 1, "grams", 2, "kilograms", 3, "feet", 4, "miles", 5, "pounds (lbs)", 6, "ounces", 7]);
    this[_formulas] = new (T.IdentityMapOfString$ListOfnum()).from(["0", T.JSArrayOfnum().of([1, 0.001, 0, 0, 3.28084, 0.000621371, 0, 0]), "1", T.JSArrayOfnum().of([1000, 1, 0, 0, 3280.84, 0.621371, 0, 0]), "2", T.JSArrayOfnum().of([0, 0, 1, 0.0001, 0, 0, 0.00220462, 0.035274]), "3", T.JSArrayOfnum().of([0, 0, 1000, 1, 0, 0, 2.20462, 35.274]), "4", T.JSArrayOfnum().of([0.3048, 0.0003048, 0, 0, 1, 0.000189394, 0, 0]), "5", T.JSArrayOfnum().of([1609.34, 1.60934, 0, 0, 5280, 1, 0, 0]), "6", T.JSArrayOfnum().of([0, 0, 453.592, 0.453592, 0, 0, 1, 16]), "7", T.JSArrayOfnum().of([0, 0, 28.3495, 0.0283495, 3.28084, 0, 0.0625, 1])]);
    main.MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main.MyAppState.prototype;
  dart.addTypeTests(main.MyAppState);
  dart.addTypeCaches(main.MyAppState);
  dart.setMethodSignature(main.MyAppState, () => ({
    __proto__: dart.getMethods(main.MyAppState.__proto__),
    convert: dart.fnType(dart.void, [core.double, core.String, core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyAppState, I[0]);
  dart.setFieldSignature(main.MyAppState, () => ({
    __proto__: dart.getFields(main.MyAppState.__proto__),
    [_numberFrom]: dart.fieldType(core.double),
    [_startMeasure]: dart.fieldType(dart.nullable(core.String)),
    [_resultMessage]: dart.fieldType(dart.dynamic),
    [_convertedMeasure]: dart.fieldType(dart.dynamic),
    [_measures]: dart.finalFieldType(core.List$(core.String)),
    inputStyle: dart.finalFieldType(text_style.TextStyle),
    labelStyle: dart.finalFieldType(text_style.TextStyle),
    [_measuresMap]: dart.finalFieldType(core.Map$(core.String, core.int)),
    [_formulas]: dart.finalFieldType(dart.dynamic)
  }));
  main.main = function main$0() {
    return binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
