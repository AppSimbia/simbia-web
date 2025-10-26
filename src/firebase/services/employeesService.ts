import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../config";
import { EmployeeRequest, EmployeeResponse } from "../dtos";
import { getDownloadURL, ref } from "firebase/storage";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function getEmployees(industryId: number): Promise<EmployeeResponse[]> {
  const querySnapshot = await getDocs(collection(db, "employee"));
  const employees: EmployeeResponse[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    if (data.industryId === industryId) {
      const employee: EmployeeResponse = {
        id: doc.id,
        imageUri: data.imageUri,
        industryId: data.industryId,
        name: data.name,
        email: data.email
      };

      employees.push(employee);
    }
  });

  return employees;
}

export async function createEmployee(employee: EmployeeRequest): Promise<boolean> {
    try {
      const imageUri = await getDefaultImageUrl();
  
      const userCredential = await createUserWithEmailAndPassword(auth, employee.email, "senha123");
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "employee", uid), {
        ...employee,
        imageUri,
      });
  
      return true;
    } catch (err: any) {
      console.error("Erro ao adicionar funcionário:", err.code, err.message);
      return false;
    }
  }
}
  

export async function getDefaultImageUrl(): Promise<string> {
  try {
  const imageRef = ref(storage, "profile_images/default-profile.svg");
    const url = await getDownloadURL(imageRef);

    return url;
  } catch (error) {      
    return "";
  }
}

export async function removeEmployee(uid: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, "employee", uid));
    return true;
  }
  catch (err) {
    console.error("Erro ao remover funcionário: ", err);
    return false;
  }
}