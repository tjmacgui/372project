const cart = new Map();
exports.add    = ({ id, qty = 1 }) => cart.set(+id, (cart.get(+id) || 0) + +qty);
exports.remove = id                => cart.delete(+id);
exports.clear  = ()                => cart.clear();
exports.items  = ()                => [...cart].map(([id, qty]) => ({ id, qty }));
