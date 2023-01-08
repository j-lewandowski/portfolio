function ProjectItem({ name, desc, stack }) {
    return (
        <div className="flex items-center justify-around flex-col relative">
            <div className="w-96 h-64 bg-[#16191c] relative -z-10">
                <div className="p-4 pr-32 space-y-4">
                    <p className="font-IBM">{name}</p>
                    <p>{desc}</p>
                </div>
                <div className="flex space-x-2 absolute bottom-1 w-full justify-around text-gray-400 font-IBM text-sm">
                    {stack.map((item, i) => {
                        return <p key={i}>{item}</p>;
                    })}
                </div>
                <div className="w-96 h-64 absolute z-10 bg-accent -top-28 left-48" />
            </div>
        </div>
    );
}

export default ProjectItem;