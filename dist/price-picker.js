import {priceCatalog as catalog} from './data/price-catalog.js';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function pricePicker(id){
 const selected=catalog.models.find(m=>m.id===id);
 return '<div class="price-picker"><span class="eyebrow">按用途选模型</span><h2>'+esc(selected?.name||id)+'</h2><div class="price-category-buttons">'+catalog.categories.map(c=>'<button type="button" class="ghost-btn" data-price-category="'+c.id+'">'+c.name+' <span>TOP 10</span></button>').join('')+'</div><p class="mini-meta">分类弹窗按公开目录覆盖排序。选择具体版本后，查询 '+catalog.sources.length+' 个不同站点；有效报价按实际返回计算。</p><input id="priceModel" type="hidden" value="'+esc(id)+'"><dialog id="pricePickerDialog" class="price-picker-dialog" aria-labelledby="pricePickerTitle"><div class="price-picker-head"><div><span class="eyebrow">MODEL COVERAGE TOP 10</span><h2 id="pricePickerTitle">选择模型</h2></div><button type="button" class="icon-btn" data-price-close aria-label="关闭模型选择">×</button></div><div class="price-category-buttons" id="pricePickerCategories">'+catalog.categories.map(c=>'<button type="button" class="ghost-btn" data-picker-category="'+c.id+'">'+c.name+'</button>').join('')+'</div><p class="mini-meta">'+esc(catalog.rankingBasis)+' 核查日期 '+catalog.checkedAt+'。</p><label class="price-picker-search">搜索本类前十模型<input id="pricePickerSearch" type="search" placeholder="输入模型名称或版本" autocomplete="off"></label><div id="pricePickerList" class="price-picker-list"></div></dialog></div>';
}
export function pickerRows(category,query='',selected=''){
 const group=catalog.categories.find(c=>c.id===category)||catalog.categories[0];
 return group.models.map((id,index)=>({m:catalog.models.find(m=>m.id===id),rank:index+1})).filter(({m})=>(m.name+' '+m.aliases.join(' ')).toLowerCase().includes(query.toLowerCase().trim())).map(({m,rank})=>'<button type="button" class="price-model-option" data-price-choice="'+esc(m.id)+'" aria-pressed="'+(m.id===selected)+'"><span class="price-rank">'+String(rank).padStart(2,'0')+'</span><span><strong>'+esc(m.name)+'</strong><small>'+esc(m.aliases[0])+'</small></span><span class="price-coverage">'+m.listedSources.length+' 家收录<small>'+((m.comparableSources?.length||0)+' 家可比'+(m.id===selected?' · 当前':' →'))+'</small></span></button>').join('')||'<p class="empty">本类前十中没有匹配模型，请更换关键词。</p>';
}
export function bindPricePicker(navigate){
 const dialog=document.querySelector('#pricePickerDialog');if(!dialog)return;
 const search=dialog.querySelector('#pricePickerSearch'),list=dialog.querySelector('#pricePickerList');
 let category='text';
 const render=()=>{const c=catalog.categories.find(c=>c.id===category);dialog.querySelector('#pricePickerTitle').textContent=c.name+' · '+c.description;list.innerHTML=pickerRows(category,search.value,document.querySelector('#priceModel').value);dialog.querySelectorAll('[data-picker-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.pickerCategory===category)));};
 document.querySelectorAll('[data-price-category]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.priceCategory;search.value='';render();dialog.showModal();search.focus();}));
 dialog.querySelectorAll('[data-picker-category]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.pickerCategory;search.value='';render();}));
 search.addEventListener('input',render);
 dialog.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();dialog.close();}});
 dialog.querySelector('[data-price-close]').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}const choice=e.target.closest('[data-price-choice]');if(choice){dialog.close();navigate('boards/price/'+choice.dataset.priceChoice);}});
}
