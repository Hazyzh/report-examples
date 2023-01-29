const { addMsg } = require('jest-html-reporters/helper');

describe('add log to test', () => {
  test('attach logs for 卧龙吟', async () => {
    await addMsg({ message: '束发读诗书 修德兼修身'});
    await addMsg({ message: '仰观与俯察 韬略胸中存'});
    await addMsg({ message: '躬耕从未忘忧国 谁知热血在山林'});
    await addMsg({ message: '凤兮凤兮思高举 时乱势危久沉吟'});
    await addMsg({ message: '茅庐承三顾 促膝纵横论'});
    await addMsg({ message: '半生遇知己 蛰人感幸甚'});
    await addMsg({ message: '明朝携剑随君去 羽扇纶巾赴征尘'});
    await addMsg({ message: '龙兮龙兮风云会 长啸一声抒怀襟'});
    await addMsg({ message: '归去归去来兮 我宿愿 余年还做垅亩民'});

    expect(3).toBe(3);
  })

  test('attach logs for 卧龙吟 2', async () => {
    await addMsg({ message: '天道常变异 运数杳难寻'});
    await addMsg({ message: '成败在人谋 一诺竭终悃'});
    await addMsg({ message: '丈夫在世当有为 为民播下太平春'});
    await addMsg({ message: '归去归去来兮 我宿愿 余年还做垅亩民'});
    await addMsg({ message: '清风明月入怀抱 猿鹤听我再抚琴'});

    expect(3).toBe(3);
  })

  test('attach logs 2', async () => {
    await addMsg({ message: JSON.stringify({hell: 'world', name: 'test', age: 18}, null, 2)});
    expect(3).toBe(3);
  })
})
