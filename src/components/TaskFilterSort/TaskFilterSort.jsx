import { useState } from "react";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import PropTypes from 'prop-types';


const TaskFilterSort = ({ onSearch, onFilter, onSort }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState("");
    const [isAscending, setIsAscending] = useState(true);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleFilter = (e) => {
        setStatus(e.target.value);
        onFilter(e.target.value);
    };

    const toggleSort = () => {
        setIsAscending(!isAscending);
        onSort(!isAscending);
    };



    return (
        < >
        {/* Search Input */}
        <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 text-sm font-medium border-none focus:outline-1 bg-slate-100 focus:outline-blue-500 rounded w-full md:w-auto"
        />

        {/* Status Filter */}
        <select
            value={status}
            onChange={handleFilter}
            className="p-2 border-none font-medium focus:outline-1 bg-slate-100 focus:outline-blue-500 rounded w-full md:w-auto text-sm"
        >
            <option value="">All Tasks</option>
            <option value="todo">To-Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
        </select>

        {/* Sort Button */}
        <button
            onClick={toggleSort}
            className="p-2 border-none focus:outline-1 bg-slate-100 focus:outline-blue-500 rounded flex items-center gap-2 text-sm font-medium transition duration-300"
        >
            {isAscending ? <FaSortAmountUp /> : <FaSortAmountDown />} 
            {isAscending ? "Ascending" : "Descending"}
        </button>
    </>
    );
};

TaskFilterSort.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
};

export default TaskFilterSort;
