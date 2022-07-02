import auth from "@react-native-firebase/auth";
import BASE_URL, { CRONICA_ID } from "../utils/constants/baseUrl";


export const createUserFreemoniDb = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/newconsumerfromthirdparty`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "post",
        body: JSON.stringify({
          dni: dataUser.dni,
          email: dataUser.email,
          lastName: dataUser.lastname,
          firstName: dataUser.name,
          password: dataUser.password,
          acceptTermsCond: true,
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createUserSocialAuthFreemoniDb = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/newconsumerfromsocialnetapps`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "post",
        body: JSON.stringify({
          email: dataUser.email,
          displayName: dataUser.displayName,
          isNewUser: true,
          userId: dataUser.uid,
          acceptTermsCond: true,
          notificationReadingDate: "",
        }),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getDataUser = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/${dataUser.uid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        appname: "club-cronica-app",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateNotifications = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/users/updatenotificationreadingdate`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "patch",
        body: JSON.stringify({}),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAccountData = async (dataUser) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v3/accounts/byuser/${dataUser.userId}?destinationShopId=${dataUser.shopsWhereIHaveAccount[0]}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getNotifications = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/notifications/listwithfilters?limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoreNotifications = async (lastId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/notifications/listwithfilters?limit=10&lastNotificationId=${lastId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsByUser = async (dataUser, dataAccount) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${dataUser.userId}?accountId=${dataAccount[0].accountId}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMoreTransactionsByUser = async (
  dataUser,
  dataAccount,
  trxId
) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v2/transactions/byuser/${dataUser.userId}?accountId=${dataAccount[0].accountId}&lastTrxId=${trxId}&limit=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSalePoints = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/salepoints/${CRONICA_ID}/listwithfilters?onlyHome=true&onlyMainPos=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllCouponsAvailable = async () => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/availablecoupons/${CRONICA_ID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCouponsAvailable = async (posId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/availablecoupons/${CRONICA_ID}?posId=${posId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getGenerateCodeCoupon = async (posId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/assign/${CRONICA_ID}/${posId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
        method: "post",
        body: JSON.stringify({}),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserCoupon = async (trxId) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(
      `${BASE_URL}/api/v1/coupons/userCoupon/${CRONICA_ID}/${trxId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          appname: "club-cronica-app",
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const setDni = async (dni) => {
  try {
    const token = await auth().currentUser.getIdToken();
    const res = await fetch(`${BASE_URL}/api/v1/users/setdni`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        appname: "club-cronica-app",
      },
      method: "post",
      body: JSON.stringify({
        dni,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
