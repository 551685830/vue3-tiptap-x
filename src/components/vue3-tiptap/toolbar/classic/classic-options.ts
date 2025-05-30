import type { OptionProps } from "./classic";
import type { Editor } from "@tiptap/core";
import {
	UndoOutlined,
	RedoOutlined,
	DeleteOutlined,
	BoldOutlined,
	UnderlineOutlined,
	StrikethroughOutlined,
	ItalicOutlined,
	MinusOutlined,
	DisconnectOutlined,
	BlockOutlined,
	CodeOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	SearchOutlined
} from "@ant-design/icons-vue";

export const createToolbarOptions = (
	editor: Editor,
	methods: Record<string, any>
): OptionProps[] => [
	{
		name: "UndoOutlined",
		component: UndoOutlined,
		tip: "撤销",
		click() {
			editor.chain().focus().undo().run();
		},
		active: false,
		disabled: true,
	},
	{
		name: "RedoOutlined",
		component: RedoOutlined,
		tip: "重做",
		click() {
			editor.chain().focus().redo().run();
		},
		active: false,
		disabled: true,
	},
	{
		name: "DeleteOutlined",
		component: DeleteOutlined,
		tip: "清除格式",
		click() {
			editor.chain().focus().clearNodes().unsetAllMarks().run();
		},
		active: false,
		disabled: true,

	},
	{
		name: "bold",
		component: BoldOutlined,
		click() {
			editor.chain().focus().toggleBold().run();
		},
		tip: "粗体",
		active: false,
		disabled: true,

	},
	{
		name: "underline",
		component: UnderlineOutlined,
		click() {
			editor.chain().focus().toggleUnderline().run();
		},
		tip: "下划线",
		active: false,
		disabled: true,
	},
	{
		name: "strike",
		component: StrikethroughOutlined,
		click() {
			editor.chain().focus().toggleStrike().run();
		},
		tip: "删除线",
		active: false,
		disabled: true,

	},
	{
		name: "italic",
		component: ItalicOutlined,
		tip: "斜体",
		click() {
			editor.chain().focus().toggleItalic().run();
		},
		active: false,
		disabled: true,
	},
	{
		name: "MinusOutlined",
		component: MinusOutlined,
		tip: "水平线",
		click() {
			editor.chain().focus().setHorizontalRule().run();
		},
		active: false,
		disabled: true,
	},
	{
		name: "MenuUnfoldOutlined",
		component: MenuUnfoldOutlined,
		tip: "缩进",
		click() {
			editor.chain().focus().indent().run();
		},
		active: false,
		disabled: true,
	},
	{
		name: "MenuFoldOutlined",
		component: MenuFoldOutlined,
		tip: "取消缩进",
		click() {
			editor.chain().focus().outdent().run();
		},
		disabled: true,
		active: false
	},
	{
		name: "blockquote",
		component: BlockOutlined,
		click() {
			editor.chain().focus().toggleBlockquote().run();
		},
		tip: "引用",
		disabled: true,
		active: false
	},
	{
		name: "codeBlock",
		component: CodeOutlined,
		click() {
			editor.chain().focus().toggleCodeBlock().run();
		},
		tip: "代码块",
		disabled: true,
		active: false
	},
	{
		name: "searchoutlined",
		component: SearchOutlined,
		tip: "查找",
		click() {
			const { toggleModal } = methods[this.name];
			toggleModal();
		},
		disabled: true,
		active: false
	},
	{
		name: "unsetlink",
		component: DisconnectOutlined,
		tip: "取消链接",
		click() {
			editor.chain().focus().extendMarkRange("link").unsetLink().run();
		},
		disabled: true,
		active: false
	}
];
