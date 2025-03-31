export default function getMaterialMap(account) {
    const materials = new Map();
    const inventory = (account == undefined) ? undefined : JSON.parse(account.inventory);

    if (inventory != undefined) {
        inventory.forEach((item) => {
            materials.set(item.name, item.needed);
        });
    }

    return materials;
}