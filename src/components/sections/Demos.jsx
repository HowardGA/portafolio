export const Demos = () => {
    return (
        <section
            id="demos"
            className="w-full border-b-[1px] border-black mx-4 py-16"
        >
            <div className="max-w-6xl mx-auto">
                <div className="border-b-2 border-black mb-10 pb-2 flex justify-between items-end">
                    <h2 className="text-xl font-mono uppercase tracking-tighter italic">Preview</h2>
                    <span className="font-mono text-xs uppercase hidden md:block">Future Publications</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-7">
                        <h1 className="text-7xl md:text-9xl font-bold uppercase tracking-tighter leading-none mb-6">
                            Demos
                        </h1>
                        <p className="font-serif text-xl italic text-gray-700 max-w-md">
                        </p>
                    </div>

                    <div className="md:col-span-5 flex justify-center">
                        <div className="border-4 border-double border-black p-8 text-center rotate-3 hover:rotate-0 transition-transform duration-500 bg-white shadow-lg max-w-sm">
                            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 border-b border-black pb-2">
                                Status: In Progress
                            </h3>
                            <p className="text-4xl font-bold uppercase tracking-tighter leading-none mb-2">
                                Coming <br/> Soon
                            </p>
                            <p className="font-mono text-[10px] uppercase mt-4 italic">
                                Check back for the Next Edition
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}