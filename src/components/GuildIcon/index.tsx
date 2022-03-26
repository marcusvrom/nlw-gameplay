import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";


export function GuildIcon() {

    const uri = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64a7d80b-836d-4afb-a395-ed3fbf04ccd0/dba25xu-8bd11dea-91b3-4a16-9a84-cbb64f143e85.png/v1/fill/w_768,h_768,q_80,strp/discord_icon_for_metro_ui_icon_set_by_craftplacer_dba25xu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvNjRhN2Q4MGItODM2ZC00YWZiLWEzOTUtZWQzZmJmMDRjY2QwXC9kYmEyNXh1LThiZDExZGVhLTkxYjMtNGExNi05YTg0LWNiYjY0ZjE0M2U4NS5wbmciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.dAL-tmHqtmPnjEZCKmYs_Ca9RJENTMgWMfY2V4GBg_o`


    return (
        <Image 
        source={{uri}}
        style={styles.image}
        resizeMode="cover"
        />
    )
}