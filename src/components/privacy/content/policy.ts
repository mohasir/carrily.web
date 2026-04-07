export const getPolicySections = (t: any) => {
  const s1_p1 = t('privacy.s1.p1').replace('{0}', '<strong class="text-white light:text-black">' + t('privacy.s1.p1.highlight') + '</strong>');
  const s2_p1 = t('privacy.s2.p1').replace('{0}', '<strong class="text-white light:text-black">' + t('privacy.s2.p1.highlight') + '</strong>');

  const s4_list1 = t('privacy.s4.list.1').replace('{0}', '<strong class="text-white light:text-black">' + t('privacy.s4.list.1.highlight') + '</strong>');
  const s5_p1 = t('privacy.s5.p1').replace('{0}', '<strong class="text-white light:text-black">' + t('privacy.s5.p1.highlight') + '</strong>');
  const s7_p1 = t('privacy.s7.p1').replace('{0}', '<strong class="text-white light:text-black">' + t('privacy.s7.p1.highlight') + '</strong>');

  return [
    {
      id: 1,
      title: t('privacy.s1.title'),
      p1: s1_p1,
      list: [
        t('privacy.s1.list.1'),
        t('privacy.s1.list.2'),
        t('privacy.s1.list.3'),
        t('privacy.s1.list.4'),
        t('privacy.s1.list.5')
      ]
    },
    {
      id: 2,
      title: t('privacy.s2.title'),
      p1: s2_p1,
      list: [
        t('privacy.s2.list.1'),
        t('privacy.s2.list.2'),
        t('privacy.s2.list.3'),
        t('privacy.s2.list.4'),
        t('privacy.s2.list.5')
      ]
    },
    {
      id: 3,
      title: t('privacy.s3.title'),
      p1: t('privacy.s3.p1'),
      listItems: [
        { title: t('privacy.s3.list.1.title'), content: t('privacy.s3.list.1.content') },
        { title: t('privacy.s3.list.2.title'), content: t('privacy.s3.list.2.content') },
        { title: t('privacy.s3.list.3.title'), content: t('privacy.s3.list.3.content') }
      ],
      p2: t('privacy.s3.p2')
    },
    {
      id: 4,
      title: t('privacy.s4.title'),
      p1: t('privacy.s4.p1'),
      htmlList: [
        s4_list1,
        t('privacy.s4.list.2'),
        t('privacy.s4.list.3')
      ]
    },
    {
      id: 5,
      title: t('privacy.s5.title'),
      p1: s5_p1
    },
    {
      id: 6,
      title: t('privacy.s6.title'),
      p1: t('privacy.s6.p1')
    },
    {
      id: 7,
      title: t('privacy.s7.title'),
      p1: s7_p1
    },
    {
      id: 8,
      title: t('privacy.s8.title'),
      p1: t('privacy.s8.p1')
    },
    {
      id: 9,
      title: t('privacy.s9.title'),
      p1: t('privacy.s9.p1')
    },
    {
      id: 10,
      title: t('privacy.s10.title'),
      p1: t('privacy.s10.p1'),
      isContact: true
    }
  ];
};
