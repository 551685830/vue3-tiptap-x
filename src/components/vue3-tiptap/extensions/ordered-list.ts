import type { OrderedListOptions as TiptapOrderedListOptions } from "@tiptap/extension-ordered-list";

import { OrderedList as TiptapOrderedList } from "@tiptap/extension-ordered-list";

interface CustomOrderedListOptions extends Partial<TiptapOrderedListOptions> {
	defaultStyle: string;
	itemTypeName: string;
}

interface CustomOrderedListAttributes {
	orderedStyle: string;
}

const ListItemName = "listItem";
const TextStyleName = "textStyle";

const CustomOrderedList = TiptapOrderedList.extend<CustomOrderedListOptions>({
	addOptions() {
		return {
			...this.parent?.(),
			defaultStyle: ""
		};
	},
	addAttributes() {
		return {
			orderedStyle: {
				default: this.options.defaultStyle,
				parseHTML: element => element.dataset.orderedStyle, // element => element.getAttribute("data-ordered-style")
				renderHTML: (attributes: CustomOrderedListAttributes) => ({
					"data-ordered-style": attributes.orderedStyle || this.options.defaultStyle
				})
			}
		};
	},
	addCommands() {
		return {
			setOrderedStyle: (style: string) => () => {
				this.options.defaultStyle = style;
			},
			toggleOrderedList:
				() =>
				({ commands, chain }) => {
					if (this.options.keepAttributes) {
						return chain()
							.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
							.updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName))
							.run();
					}
					return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
				}
		};
	}
});

export default CustomOrderedList;
