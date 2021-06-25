import { helper } from '@ember/component/helper';

function total([arr, attr]) {
    return arr.reduce((acc, current) => {
        return acc + current.get(attr);
    }, 0)
}

export default helper(total);