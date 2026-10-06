function ItemLista({ texto, comprado, onToggle, onRemover }) {
    return (
        <div className="flex justify-between items-center border border-gray-200 rounded-lg p-2">
            <span
                onClick={onToggle}
                className={`flex-1 cursor-pointer ${comprado ? "line-through text-gray-400" : ""}`}
            >
                {texto}
            </span>
            <button onClick={onRemover} className="text-red-600 text-sm">
                Remover
            </button>
        </div>
    );
}
export default ItemLista;