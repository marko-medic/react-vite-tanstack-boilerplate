// Define a type for the user data
interface UserData {
  id: string;
  name: string;
  email: string;
  [key: string]: unknown; // Allows for additional fields
}

class UserStorage {
  private storageKey: string;

  constructor(storageKey: string = 'user_data') {
    this.storageKey = storageKey;
  }

  // Save user data to localStorage
  public save(data: UserData): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save user data:', error);
    }
  }

  // Get user data from localStorage
  public get(): UserData | null {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Failed to retrieve user data:', error);
      return null;
    }
  }

  // Remove user data from localStorage
  public remove(): void {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (error) {
      console.error('Failed to remove user data:', error);
    }
  }
}

export { UserStorage };
