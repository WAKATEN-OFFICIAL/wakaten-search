const params =
new URLSearchParams(
location.search
);

const q =
params.get('q') || '';

document.title =
q + ' - WAKATEN Search';
