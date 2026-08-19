import { describe, expect, it } from 'vitest'
import { findTulipOnPath, tulips, messages, wishes } from '../data'

describe('conteúdo do aniversário',()=>{
  it('possui exatamente 18 tulipas',()=>expect(tulips).toHaveLength(18))
  it('desbloqueia 6 mensagens, uma a cada 3 tulipas',()=>{expect(messages).toHaveLength(6);expect(tulips.length/messages.length).toBe(3)})
  it('possui um desejo para cada ano',()=>expect(wishes).toHaveLength(18))
  it('coleta uma tulipa mesmo quando o movimento passa por cima dela',()=>expect(findTulipOnPath({x:1,y:15},{x:20,y:15},[])).toBe(0))
  it('não coleta novamente uma tulipa já guardada',()=>expect(findTulipOnPath({x:1,y:15},{x:20,y:15},[0])).not.toBe(0))
})
