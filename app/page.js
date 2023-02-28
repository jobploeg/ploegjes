

export default function Home() {

  return (
   <main className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center w-screen h-screen lg:py-0 px-1">
            <div className="py-6 space-y-4 md:space-y-6 sm:py-8">
                <h1 className="text-xl font-bold leading text-gray-900 md:text-2xl dark:text-white">
                    Agenda
                </h1>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FAmsterdam&showTitle=0&showNav=0&showDate=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&mode=AGENDA&src=cGxvZWdqZXMwNUBnbWFpbC5jb20&color=%23039BE5" 
                    frameborder="0" 
                    scrolling="no"
                    className="w-96 h-96 rounded-lg"
                >
                    
                </iframe>
            </div>
        </div>
    </main>
  )
}
