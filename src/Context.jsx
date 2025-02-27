import { createContext } from 'react'

const Context = createContext({
    isDark: true,
    changeTheme: () => { },
    savedVideos: [],
    addVideos: () => { }
})

export default Context