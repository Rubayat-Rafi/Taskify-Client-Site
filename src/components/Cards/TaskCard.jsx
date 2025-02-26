import PropTypes from "prop-types";
import {MdCreate, MdDelete, MdOutlinePushPin} from 'react-icons/md'

const TaskCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinTask,
}) => {
  return (
    <div className=" border border-slate-200 rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
      <div className="flex items-center justify-between">
        <div className="">
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>
        <MdOutlinePushPin className={`icon-btn ${isPinned ? 'text-primary': 'text-slate-300'}`} onClick={onPinTask} />
      </div>
      <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}...</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-slate-500">{tags}</div>
        <div className="flex items-center gap-2">
            <MdCreate className='icon-btn  hover:text-green-500' onClick={onEdit}/>
            <MdDelete className="icon-btn  hover:text-red-500" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string,
  tags: PropTypes.string,
  isPinned: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default TaskCard;
