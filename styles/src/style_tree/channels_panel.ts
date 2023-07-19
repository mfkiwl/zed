// import { with_opacity } from "../theme/color"
import {
    //     Border,
    //     TextStyle,
    // background,
    //     border,
    text,
} from "./components"
// import merge from "ts-deepmerge"
import { useTheme } from "../theme"
import { toggleable_icon_button } from "../component/icon_button"

export default function channels_panel(): any {
    const theme = useTheme()

    // const { is_light } = theme

    return {
        spacing: 10,
        channel_tree: {
            channel_indent: 10,
            channel_name: text(theme.middle, "sans", "variant", { size: "md" }),
            root_name: text(theme.middle, "sans", "variant", { size: "lg", weight: "bold" }),
            channel_icon: toggleable_icon_button(theme, {
                color: "variant",
                active_color: "base",
                icon: "icons/chevron_right_8.svg",
                active_icon: "icons/chevron_down_8.svg",
                flattened: false
            })
        }
    }
}
