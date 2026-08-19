import { describe, expect, it } from 'vitest'
import { findTulipsOnPath, tulips, messages, wishes } from '../data'

describe('conteúdo do aniversário',()=>{
  it('possui exatamente 18 tulipas',()=>expect(tulips).toHaveLength(18))
  it('desbloqueia 6 mensagens, uma a cada 3 tulipas',()=>{expect(messages).toHaveLength(6);expect(tulips.length/messages.length).toBe(3)})
  it('possui um desejo para cada ano',()=>expect(wishes).toHaveLength(18))
  it('coleta uma tulipa mesmo quando o movimento passa por cima dela',()=>expect(findTulipsOnPath({x:1,y:15},{x:20,y:15},[])).toContain(0))
  it('não coleta novamente uma tulipa já guardada',()=>expect(findTulipsOnPath({x:1,y:15},{x:20,y:15},[0])).not.toContain(0))
  it('respeita as proporções reais de um jardim largo',()=>expect(findTulipsOnPath({x:1,y:11},{x:40,y:11},[],{width:1400,height:500})).toContain(1))
  it('coleta todas as flores atravessadas em um movimento longo',()=>expect(findTulipsOnPath({x:1,y:13},{x:60,y:13},[],{width:1000,height:600})).toEqual(expect.arrayContaining([0,1,2])))
})
