export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.0.0",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 16,
          "column": 7
        }
      },
      "moduleName": "ember-blog/components/create-new-post/template.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("form");
      dom.setAttribute(el1,"id","createNewPost");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h3");
      var el3 = dom.createTextNode("Create Post");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("\n		");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("button");
      var el4 = dom.createTextNode("Publish");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n	");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [3]);
      var element2 = dom.childAt(element0, [7, 1]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(element1,1,1);
      morphs[1] = dom.createMorphAt(element1,3,3);
      morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
      morphs[3] = dom.createElementMorph(element2);
      return morphs;
    },
    statements: [
      ["inline","input",[],["value",["subexpr","@mut",[["get","newPost.title",["loc",[null,[5,16],[5,29]]]]],[],[]],"placeholder","Title"],["loc",[null,[5,2],[5,51]]]],
      ["inline","input",[],["value",["subexpr","@mut",[["get","newPost.author",["loc",[null,[6,16],[6,30]]]]],[],[]],"placeholder","Author"],["loc",[null,[6,2],[6,53]]]],
      ["inline","textarea",[],["value",["subexpr","@mut",[["get","newPost.text",["loc",[null,[10,19],[10,31]]]]],[],[]],"placeholder","Content","rows","6","cols","120"],["loc",[null,[10,2],[10,75]]]],
      ["element","action",["createPost",["get","newPost",["loc",[null,[14,32],[14,39]]]]],[],["loc",[null,[14,10],[14,41]]]]
    ],
    locals: [],
    templates: []
  };
}()));