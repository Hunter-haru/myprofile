import { useState } from 'react'

// SNSリンクデータの型定義
interface SocialLink {
  name: string
  url: string
  username: string
  icon: string
  color: string
  hoverColor: string
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // プロフィール情報
  const profile = {
    name: "Hunter_haru",
    bio: "Web開発者 | Esportsイベントの運営などをしています",
    location: "Osaka, Japan"
  }



  // SNSリンクの設定
  const socialLinks: SocialLink[] = [
    {
      name: "X",
      url: "https://x.com/Potapr_Eharu",
      username: "@Potapr_Eharu",
      icon: "𝕏",
      color: "bg-gray-900",
      hoverColor: "hover:bg-gray-700"
    },
    {
      name: "GitHub",
      url: "https://github.com/Hunter-haru/",
      username: "Hunter-haru",
      icon: "⚡",
      color: "bg-gray-800",
      hoverColor: "hover:bg-gray-600"
    },
    {
      name: "Contact",
      url: "https://hhw.jp/contact",
      username: "hhw.jp/contact",
      icon: "📧",
      color: "bg-blue-800",
      hoverColor: "hover:bg-gray-600"
    }
  ]

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }



  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800'
    }`}>
      {/* テーマ切り替えボタン */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
          aria-label="テーマ切り替え"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md sm:max-w-lg py-8">
          {/* プロフィールセクション */}
          <div className="text-center mb-8 opacity-0 animate-slide-in">
            
            <h1 className="text-2xl font-bold mb-2 opacity-0 animate-slide-in" style={{animationDelay: '300ms'}}>{profile.name}</h1>
            <p className={`text-sm mb-2 opacity-0 animate-slide-in ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} style={{animationDelay: '400ms'}}>
              {profile.bio}
            </p>
            <p className={`text-xs flex items-center justify-center gap-1 opacity-0 animate-slide-in ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} style={{animationDelay: '500ms'}}>
              📍 {profile.location}
            </p>
          </div>

          {/* SNSリンク一覧 */}
          <div className="space-y-3">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 ${
                  link.color
                } ${link.hoverColor} text-white opacity-0 animate-slide-in`}
                style={{
                  animationDelay: `${600 + index * 100}ms`
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl transition-transform duration-200 hover:scale-110">{link.icon}</span>
                    <div>
                      <h3 className="font-semibold text-sm">{link.name}</h3>
                      <p className="text-xs opacity-80">{link.username}</p>
                    </div>
                  </div>
                  <span className="text-white/60 transition-transform duration-200 hover:translate-x-1">→</span>
                </div>
              </a>
            ))}
          </div>

          {/* フッター */}
          <div className="text-center mt-12 opacity-0 animate-slide-in" style={{animationDelay: `${600 + socialLinks.length * 100 + 400}ms`}}>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
             Copyright © 2025 Hunter_haru. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
