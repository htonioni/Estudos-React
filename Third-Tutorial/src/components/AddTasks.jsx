function AddTasks() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o Titulo da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Digite a descricao da tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
