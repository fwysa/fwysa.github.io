function sortByLastName(l) {
  console.log('SORT CALLED');
  l.sort((c, n) => {
    let cs = c.name.split(' ');
    let ns = n.name.split(' ');

    // TODO: FIXME: Add last name

    let currentLast = cs[0];
    let nextLast = ns[0];
    return currentLast.localeCompare(nextLast);
    console.log('SORT', currentLast, nextLast, diff);
  });
  return l;
}

export { sortByLastName };
