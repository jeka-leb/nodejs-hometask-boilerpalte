const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    getAllFighters() {
        const fighter = FighterRepository.getAll();
        if (!fighter) {
            throw new Error('There are no fighter at all')
        }
        return fighter
    }

    getOneFighter(person) {
        const fighter = FighterRepository.getOne(person);
        if (!fighter) {
            throw new Error('Requested fighter has not been found')
        }
        return fighter
    }

    updateFighter(id, data) {
        const fighterUpdated = FighterRepository.update(id, data);
        if (!id || !data) {
            throw new Error('Provide appropriate data')
        }
        return fighterUpdated
    }

    createFighter(data) {
        const newfighter = FighterRepository.create(data);
        if (!data) {
            throw new Error('New fighter has not been created')
        }
        return newfighter
    }

    delete(id) {
        try {
            let fighter = FighterRepository.delete(id);
            if (!fighter.length) {
                throw Error('Fighter not deleted');
            }
            return fighter;
        } catch (error) {
            throw Error('Fighter not deleted');
        }
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new FighterService();