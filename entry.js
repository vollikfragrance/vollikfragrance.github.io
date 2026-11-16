const appExperience=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true||new URLSearchParams(location.search).get('app')==='1';
document.documentElement.dataset.experience=appExperience?'app':'web';
function openWebRoute(){if(appExperience)return;const [route,q='']=location.hash.slice(1).split('?');if(!route||['shop','status','archive'].includes(route))location.replace('desktop.html');else if(route==='collection'){const v=new URLSearchParams(q);const t=v.get('category');v.delete('category');if(t&&t!=='all')v.set('type',t[0].toUpperCase()+t.slice(1));location.replace('desktop-shop.html?'+v)}else if(route==='wishlist')location.replace('desktop-shop.html?wishlist=1');else if(route.startsWith('product/'))location.replace('desktop-shop.html?product='+encodeURIComponent(route.slice(8)))}

openWebRoute();
window.addEventListener('hashchange', openWebRoute);

if (window.parent !== window && new URLSearchParams(location.search).get('embed') === 'status') {
  document.documentElement.classList.add('embedded-status');
}
