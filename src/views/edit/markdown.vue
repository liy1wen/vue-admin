<template>
  <div>
    <el-tiptap
      v-model="content"
      :extensions="extensions"
    />
  </div>
</template>
<script>
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
  Image,
  TextAlign,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TextColor,
  Preview,
  FontSize,
  Fullscreen,
  CodeBlock,
  Blockquote
} from 'element-tiptap';
export default {
  data () {
    // editor extensions
    // they will be added to menubar and bubble menu by the order you declare.
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // render command-button in bubble menu.
        new Underline({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
        new Italic(),
        new Strike(),
        new ListItem(),
        new BulletList(),
        new OrderedList(),
        new Image(),
        new TextAlign(),
        new Table(),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new TextColor(),
        new Preview(),
        new FontSize(),
        new Fullscreen(),
        new CodeBlock(),
        new Blockquote()
      ],
      // editor's content
      content: `
        <h1>Heading</h1>
        <p>This Editor is awesome!</p>
      `,
    };
  },
}
</script>