import { useState } from 'react';
import { X, Calendar, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ReserveModalProps {
  open: boolean;
  onClose: () => void;
}

const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];

export default function ReserveModal({ open, onClose }: ReserveModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('12:00');
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  if (!open) return null;

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    if (!name.trim() || !phone.trim() || !date) {
      setStatus('error');
      return;
    }

    const { error } = await supabase.from('reservations').insert({
      name: name.trim(),
      phone: phone.trim(),
      date,
      time,
      guests,
      note: note.trim() || null,
    });

    if (error) {
      setStatus('error');
      return;
    }

    setStatus('success');
  };

  const handleClose = () => {
    setStatus('idle');
    setName('');
    setPhone('');
    setDate('');
    setTime('12:00');
    setGuests(2);
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-coffee-950/70 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-cream-50 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {status === 'success' ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-display text-2xl font-bold text-coffee-900 mb-3">
              Заявка принята!
            </h3>
            <p className="text-coffee-600 mb-6">
              Мы перезвоним вам в течение 15 минут, чтобы подтвердить бронирование.
            </p>
            <button
              onClick={handleClose}
              className="bg-coffee-600 hover:bg-coffee-700 text-cream-50 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Отлично
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-coffee-100">
              <div>
                <h3 className="font-display text-2xl font-bold text-coffee-900">Бронирование столика</h3>
                <p className="text-coffee-500 text-sm mt-1">Заполните форму — мы перезвоним для подтверждения</p>
              </div>
              <button onClick={handleClose} className="text-coffee-400 hover:text-coffee-700 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-coffee-700 text-sm font-medium mb-1.5">Ваше имя</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Анна"
                  className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-cream-100/50 text-coffee-900 placeholder:text-coffee-400 focus:outline-none focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-coffee-700 text-sm font-medium mb-1.5">Телефон</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-cream-100/50 text-coffee-900 placeholder:text-coffee-400 focus:outline-none focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-coffee-700 text-sm font-medium mb-1.5">Дата</label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-cream-100/50 text-coffee-900 focus:outline-none focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-coffee-700 text-sm font-medium mb-1.5">Гостей</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-cream-100/50 text-coffee-900 focus:outline-none focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-coffee-700 text-sm font-medium mb-2">Время</label>
                <div className="grid grid-cols-4 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 rounded-lg text-sm font-medium transition-all ${
                        time === t
                          ? 'bg-coffee-600 text-cream-50'
                          : 'bg-cream-100 text-coffee-600 hover:bg-coffee-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-coffee-700 text-sm font-medium mb-1.5">Пожелания (необязательно)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Столик у окна, день рождения..."
                  rows={2}
                  className="w-full px-4 py-3 rounded-xl border border-coffee-200 bg-cream-100/50 text-coffee-900 placeholder:text-coffee-400 focus:outline-none focus:border-coffee-500 focus:ring-2 focus:ring-coffee-200 transition-all resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-2">
                  Пожалуйста, заполните все обязательные поля корректно.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-coffee-600 hover:bg-coffee-700 disabled:opacity-60 text-cream-50 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Отправляем...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Забронировать
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
