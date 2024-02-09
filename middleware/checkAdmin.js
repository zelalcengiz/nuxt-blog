import jwt from 'jsonwebtoken';
import Cookie from "js-cookie";

export default function checkAdmin({store, error}) {
  if (store.state.auth.user.role !== 'admin') {
    error({
      statusCode: 403,
      message: 'Bu sayfaya erişim yetkiniz yok.',
    });
  }

}
