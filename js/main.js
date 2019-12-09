$('#search').on('click', function(){alert("搜索功能待添加");});

//左侧导航栏跟随
$('.container').stickem({
    start: 320
});

//列表简介markdown转换
$(".post-body-brief").each(function (){
    editormd.markdownToHTML(this.id,{
        markdown: "**Editor.md** : The open source embeddable online markdown editor (component), based on CodeMirror & jQuery & Marked.\n" +
            "\n" +
            "### Features\n" +
            "\n" +
            "- Support Standard Markdown / CommonMark and GFM (GitHub Flavored Markdown);\n" +
            "- Full-featured: Real-time Preview, Image (cross-domain) upload, Preformatted text/Code blocks/Tables insert, Code fold, Search replace, Read only, Themes, Multi-languages, L18n, HTML entities, Code syntax highlighting...;\n" +
            "- Markdown Extras : Support [ToC (Table of Contents)](https://pandao.github.io/editor.md/examples/toc.html), [Emoji](https://pandao.github.io/editor.md/examples/emoji.html), [Task lists](https://pandao.github.io/editor.md/examples/task-lists.html), [@Links](https://pandao.github.io/editor.md/examples/@links.html)...;\n" +
            "- Compatible with all major browsers (IE8+), compatible Zepto.js and iPad;\n" +
            "- Support [decode & fliter of the HTML tags & attributes](https://pandao.github.io/editor.md/examples/html-tags-decode.html);\n" +
            "- Support [TeX (LaTeX expressions, Based on KaTeX)](https://pandao.github.io/editor.md/examples/katex.html), [Flowchart](https://pandao.github.io/editor.md/examples/flowchart.html) and [Sequence Diagram](https://pandao.github.io/editor.md/examples/sequence-diagram.html) of Markdown extended syntax;\n" +
            " - Support AMD/CMD (Require.js & Sea.js) Module Loader, and Custom/define editor plugins;\n" +
            "\n" +
            "[README & Examples (English)](https://pandao.github.io/editor.md/en.html)",
        htmlDecode: false
    });
});