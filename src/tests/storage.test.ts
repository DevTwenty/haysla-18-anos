import { beforeEach, describe, expect, it } from 'vitest'
import { defaults, loadGame, saveGame, STORAGE_KEY } from '../storage'

describe('persistência do jardim',()=>{
  beforeEach(()=>localStorage.clear())
  it('usa o estado seguro quando não há dados',()=>expect(loadGame()).toEqual(defaults))
  it('restaura progresso válido',()=>{saveGame({...defaults,collected:[0,1,2],messages:[0]});expect(loadGame().collected).toHaveLength(3)})
  it('descarta valores inválidos e duplicados',()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify({...defaults,collected:[0,0,18,-2,'x'],messages:[0,8]}));expect(loadGame().collected).toEqual([0]);expect(loadGame().messages).toEqual([0])})
  it('ignora versões antigas',()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify({version:0,collected:[1]}));expect(loadGame()).toEqual(defaults)})
  it('completa novas opções do buquê em jogos já salvos',()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify({...defaults,bouquet:{ribbon:'Lilás',wrap:'Rosa',accent:'stars'}}));expect(loadGame().bouquet).toEqual({...defaults.bouquet,ribbon:'Lilás',wrap:'Rosa',accent:'stars'})})
})
