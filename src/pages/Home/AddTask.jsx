
const AddTask = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className="input-label">TITLE</label>
                <input type="text" 
                className="text-2xl text-slate-950 outline-none border-none"
                placeholder="Go To Gym At 5"
                />
            </div>

            <div className="flex flex-col gap-2 mt-4">
            <label className="input-label">CONTENT</label>
                <textarea type="text" 
                className="text-sm p-2 text-slate-950 outline-none border-none  rounded bg-slate-50"
                placeholder="Content"
                rows={10}
                />

            </div>

        <div className="mt-3">
            <label className="input-label">TAGS</label>
        </div>

        <button className="btn-primary font-medium mt-5 p-3" onClick={()=>{}} >ADD</button>

        </div>
    );
};

export default AddTask;