import { create } from 'zustand';

interface State {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

export const useNavbarStore = create<State>()((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () =>
    set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
