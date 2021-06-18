import { useContext } from 'react'
import { StoreContext } from '../../store/store'
export default function LocaleSwitcher() {
    const ctx = useContext(StoreContext)
    const { lang } = ctx.state
    const { setLang } = ctx

    return (
        <div className="locale-switcher">
            <button onClick={() => setLang('et')} className={`locale ${lang == 'et' && 'locale-active'}`}>Es</button>
            <button onClick={() => setLang('en')} className={`locale ${lang == 'en' && 'locale-active'}`}>En</button>
            <button onClick={() => setLang('ru')} className={`locale ${lang == 'ru' && 'locale-active'}`}>Ru</button>
        </div>
    )
}